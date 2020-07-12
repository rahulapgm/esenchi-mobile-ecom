import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import { Card, Checkbox, IconButton, List } from "react-native-paper";
import Heading from "../../../custom/Heading/Heading";
import ShadowBox from "../../../../hoc/ShadowBox";

export const Payment = props => {
  const [checked, setChecked] = React.useState(0);
  const paymentMethods = [
    { type: "UPI", icon: "contactless-payment", selected: true },
    { type: "Google Pay", icon: "google", selected: false },
    { type: "Credit/Debit/ATM Card", icon: "credit-card", selected: false },
    { type: "Cash On Delivery", icon: "cash", selected: false }
  ];
  const test = true;
  return (
    <View style={{ marginBottom: 24 }}>
      <Heading type="h2">PAYMENT</Heading>
      {paymentMethods.map((item, index) => {
        const SelectedCheck =
          checked === index
            ? props => (
                <MaterialCommunityIcons
                  {...props}
                  style={{color: "white" }}
                  name={"check-circle-outline"}
                  size={26}
                />
              )
            : props => <React.Fragment></React.Fragment>;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setChecked(index);
            }}
          >
            <ShadowBox style={checked === index
                    ? { flex:1, flexDirection:"row", alignItems:"center",backgroundColor: "#304FFE", color: "white"}
                    : {flex:1, flexDirection:"row", alignItems:"center"}}>
              {/* <Card.Title
                title={item.type}
                right={props => <SelectedCheck {...props} />}
                left={props => (
                  <MaterialCommunityIcons
                    {...props}
                    name={item.icon}
                    style={checked === index ? { color: "white" } : {}}
                  />
                )}
                style={
                  checked === index
                    ? { backgroundColor: "#304FFE", color: "white"}
                    : {}
                }
                titleStyle={checked === index ? { color: "white" } : {}}
              /> */}
              <MaterialCommunityIcons
                    {...props}
                    name={item.icon}
                    size={26}
                    style={checked === index ? { color: "white" } : {}}
                  />
              <Heading type="h3" style={checked === index ? { color: "white", fontWeight:"bold", padding:10 } : {fontWeight:"bold", padding:10}}>{item.type}</Heading>

              <View style={{position:"absolute", right:30}}>
                <SelectedCheck />
              </View>

            </ShadowBox>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Payment;

// right={
//   (props) => {
//  <Checkbox
//    {...props}
//    status={checked ? 'checked' : 'unchecked'}
//    onPress={() => {
//      setChecked(!checked);
//    }
//  }/>
// }}
