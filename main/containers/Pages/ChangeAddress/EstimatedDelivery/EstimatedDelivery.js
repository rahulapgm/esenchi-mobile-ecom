import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  SafeAreaView,
  Text
} from "react-native";
import { Paragraph, Subheading, Button } from "react-native-paper";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import toJS from "../../../../hoc/toJS/toJS";

import { getEstimatedDelivery } from "../actions";

import {
  selectUserPincode,
  selectUserAddress,
  selectEstimatedDelivery
} from "../selectors";
import ShadowBox from "../../../../hoc/ShadowBox";
import { getUserAddress } from "../actions";

export const EstimatedDelivery = props => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const {
    userAddress,
    estimatedDelivery = {},
    hideChangeAddress = false,
    navigation,
    userPincode,
    getEstimatedDelivery
  } = props;

  React.useEffect(() => {
    const { getUserAddress, userAddress } = props;
    if (!userAddress) {
      getUserAddress();
    }
    const unsubscribe = navigation.addListener("focus", () => {
      if (userPincode) {
        getEstimatedDelivery(userPincode);
      }
    })[navigation];

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  });

  const estimatedDeliveryMessage = estimatedDelivery.message || "";
  return (
    <React.Fragment>
      <ShadowBox>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={{ paddingRight: 6 }}>
            <MaterialCommunityIcons
              name="information-outline"
              color="red"
              size={20}
              onPress={() => {
                setShowInfoModal(true);
              }}
            />
          </TouchableOpacity>
          <Subheading
            style={{ fontSize: 14, color: "blue", fontWeight: "bold" }}
          >
            {estimatedDeliveryMessage}
          </Subheading>
        </View>
        <Paragraph>
          Delivery address:
          <Paragraph
            style={styles.deliveryAddress}
          >{` ${userAddress}`}</Paragraph>
        </Paragraph>
        {!hideChangeAddress && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChangeAddress", {
                screen: "ChangeAddress",
                params: { targetPage: "CartTab" }
              });
            }}
          >
            <Paragraph style={styles.changeAddress}>Change Address</Paragraph>
          </TouchableOpacity>
        )}
      </ShadowBox>

      <Modal
        visible={showInfoModal}
        onDismiss={() => {
          setShowInfoModal(false);
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "center",
            marginHorizontal: 12,
            marginTop: -60
          }}
        >
          <Subheading style={{ fontStyle: "italic" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>
              *{" "}
            </Text>
            Delivery time is subjected to change based on the time you give the
            order and availablity of delivery slots.
          </Subheading>
          <Button
            style={{ margin: 12 }}
            icon="close-outline"
            mode="close"
            onPress={() => {
              setShowInfoModal(false);
            }}
          >
            <Text>Close</Text>
          </Button>
        </SafeAreaView>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  userPincode: selectUserPincode(),
  userAddress: selectUserAddress(),
  estimatedDelivery: selectEstimatedDelivery()
});

const mapDispatchToProps = dispatch => {
  return {
    getUserAddress: () => dispatch(getUserAddress()),
    getEstimatedDelivery: data => dispatch(getEstimatedDelivery(data))
  };
};

const styles = StyleSheet.create({
  deliveryAddress: {
    flex: 0.5,
    paddingTop: 6,
    fontWeight: "bold",
    textAlign: "left"
  },
  changeAddress: { color: "#1a75ff", textDecorationLine: "underline" }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(EstimatedDelivery));
