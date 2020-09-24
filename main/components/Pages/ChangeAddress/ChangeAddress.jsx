import React, { useState } from "react";

import {
  TextInput,
  Subheading,
  Button,
  HelperText,
  Dialog,
  Portal,
  Paragraph,
  ActivityIndicator,
  Colors
} from "react-native-paper";

import { View, TouchableOpacity, ScrollView } from "react-native";
import ShadowBox from "../../../hoc/ShadowBox/ShadowBox";

import Brand from "../../../components/common/Brand/Brand";

import styles from "./changeAddressStyles";

export const ChangeAddress = props => {
  const { userAddress, isUpdating, userName = "" } = props;

  let houseName = "";
  let userLandMark = "";
  let street = "";
  let panchayath = "";
  let pinCode = "";

  const [initialStateLoad, setInitialStateLoad] = useState(false);
  if (userAddress && !initialStateLoad) {
    const userAddressArray = userAddress.split(",");
    if (userAddressArray.length === 4) {
      houseName = userAddressArray[0].trim();
      street = userAddressArray[1].trim();
      panchayath = userAddressArray[2].trim();
      pinCode = userAddressArray[3].trim();
    } else if (userAddressArray.length === 5) {
      houseName = userAddressArray[0].trim();
      userLandMark = userAddressArray[1].trim();
      street = userAddressArray[2].trim();
      panchayath = userAddressArray[3].trim();
      pinCode = userAddressArray[4].trim();
    }
    setInitialStateLoad(true);
  }

  const [geoPoint, setUserGeoPoint] = useState(null);

  const { saveUserAddress } = props;
  const [saveAddressBtnClicked, setSaveAddressBtnClicked] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);
  const [addressObj, setAddressObj] = React.useState({
    houseName,
    street,
    panchayath,
    pinCode,
    userLandMark,
    userName
  });

  const [dialogVisible, setDialogVisiblity] = React.useState(false);

  const hideDialog = () => setDialogVisiblity(false);

  React.useEffect(() => {
    if (!geoPoint) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserGeoPoint(position);
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  });

  const validateAddressObject = addressObj => {
    const errArray = [];
    if (!addressObj.userName) {
      errArray.push("userName");
    }
    if (!addressObj.houseName) {
      errArray.push("");
    }
    if (!addressObj.street) {
      errArray.push("Please provide your street name");
    }
    if (!addressObj.panchayath) {
      errArray.push("Please provide your street Panchayath/Village");
    }
    if (!addressObj.pinCode) {
      errArray.push("Please provide your street PinCode Number");
    }
    if (!errArray.length) {
      setDialogVisiblity(true);
    } else {
      setErrorMsgs(errArray);
    }
  };

  return (
    <ScrollView>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>Are you in this location, Right now?</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Press 'Yes' if you are in this location now, this might help us in
              delivering your orders early.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                hideDialog();
                saveUserAddress({ addressObj });
              }}
            >
              No
            </Button>
            <Button
              onPress={() => {
                hideDialog();
                saveUserAddress({ addressObj, geoPoint });
              }}
            >
              Yes
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <ShadowBox>
        <Subheading>DELIVERY ADDRESS</Subheading>

        <TextInput
          label="Name(പേര്)*:"
          value={addressObj.userName}
          onChangeText={text =>
            setAddressObj({ ...addressObj, userName: text })
          }
          style={styles.inputTextStyle}
          error={saveAddressBtnClicked && addressObj.userName === ""}
        />

        {saveAddressBtnClicked && addressObj.userName === "" && (
          <HelperText
            type="error"
            visible={saveAddressBtnClicked && addressObj.userName === ""}
          >
            Please provide your name(പേര്).
          </HelperText>
        )}

        <TextInput
          label="House Name/Flat No(വീടുപേര്‍)*:"
          value={addressObj.houseName}
          onChangeText={text =>
            setAddressObj({ ...addressObj, houseName: text })
          }
          style={styles.inputTextStyle}
          error={saveAddressBtnClicked && addressObj.houseName === ""}
        />

        {saveAddressBtnClicked && addressObj.houseName === "" && (
          <HelperText
            type="error"
            visible={saveAddressBtnClicked && addressObj.houseName === ""}
          >
            Please provide your House Name/Ward No./Flat No.
          </HelperText>
        )}

        <TextInput
          label="Landmark(ലാൻഡ്മാർക്ക്):"
          value={addressObj.userLandMark}
          onChangeText={text =>
            setAddressObj({ ...addressObj, userLandMark: text })
          }
          style={styles.inputTextStyle}
        />

        <TextInput
          label="Street/Locality(തെരുവ്/പ്രദേശം)*:"
          value={addressObj.street}
          onChangeText={text => setAddressObj({ ...addressObj, street: text })}
          style={styles.inputTextStyle}
          error={saveAddressBtnClicked && addressObj.street === ""}
        />
        {saveAddressBtnClicked && addressObj.street === "" && (
          <HelperText
            type="error"
            visible={saveAddressBtnClicked && addressObj.street === ""}
          >
            Please provide your street name
          </HelperText>
        )}

        <TextInput
          label="Panchayath/Muncipality(പഞ്ചായത്ത്)*:"
          value={addressObj.panchayath || ""}
          onChangeText={text =>
            setAddressObj({ ...addressObj, panchayath: text })
          }
          style={styles.inputTextStyle}
          error={saveAddressBtnClicked && addressObj.panchayath === ""}
        />
        {saveAddressBtnClicked && addressObj.panchayath === "" && (
          <HelperText
            type="error"
            visible={saveAddressBtnClicked && addressObj.panchayath === ""}
          >
            Please provide your
            Panchayath/Muncipality(പഞ്ചായത്ത്/മുനിസിപ്പാലിറ്റി)
          </HelperText>
        )}

        <TextInput
          label="Pincode(പിൻ കോഡ്)*:"
          value={addressObj.pinCode || ""}
          onChangeText={text => setAddressObj({ ...addressObj, pinCode: text })}
          maxLength={6}
          keyboardType="number-pad"
          style={styles.inputTextStyle}
          error={saveAddressBtnClicked && addressObj.pinCode === ""}
        />

        {saveAddressBtnClicked && addressObj.pinCode === "" && (
          <HelperText
            type="error"
            visible={saveAddressBtnClicked && addressObj.pinCode === ""}
          >
            Please provide your Pincode(പിൻ കോഡ്)
          </HelperText>
        )}

        <TouchableOpacity
          style={styles.saveAddressBtn}
          onPress={() => {
            setSaveAddressBtnClicked(true);
            validateAddressObject(addressObj);
          }}
        >
          {isUpdating ? (
            <ActivityIndicator
              animating={true}
              color={Colors.white}
              size={17}
              style={{ width: "100%", padding: 6 }}
            />
          ) : (
            <Subheading style={{ color: "white", textAlign: "center" }}>
              SAVE ADDRESS
            </Subheading>
          )}
        </TouchableOpacity>
      </ShadowBox>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          top: 42,
          padding: 6
        }}
      >
        <Brand brandIcon={styles.brandIcon} brandFontSize={24} />
      </View>
    </ScrollView>
  );
};

export default ChangeAddress;
