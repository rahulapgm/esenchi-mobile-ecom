import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import { Title } from "react-native-paper";
import Heading from "../../../custom/Heading/Heading";
import ShadowBox from "../../../../hoc/ShadowBox";

export const Payment = props => {
  let {paymentMethods = [], setPaymentMethod} = props;
  const currentPaymentMethod = paymentMethods.findIndex(item => item.selected === true) || 0;

  const [checked, setChecked] = React.useState(currentPaymentMethod);

  const fallbackPaymentMethods = [
    { type: "Cash On Delivery", icon: "cash", selected: false }
  ];
  if(!paymentMethods.length){
    paymentMethods = fallbackPaymentMethods;
  }

  return (
    <ShadowBox>
      <Title style={{padding:6, fontSize:24}}>PAYMENT</Title>
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
            : () => <React.Fragment></React.Fragment>;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setChecked(index);
              setPaymentMethod(paymentMethods[index])
            }}
          >
            <ShadowBox style={checked === index
                    ? { flex:1, flexDirection:"row", alignItems:"center",backgroundColor: "#304FFE", color: "white"}
                    : {flex:1, flexDirection:"row", alignItems:"center"}}>
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
    </ShadowBox>
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

// {/* <Card.Title
//   title={item.type}
//   right={props => <SelectedCheck {...props} />}
//   left={props => (
//     <MaterialCommunityIcons
//       {...props}
//       name={item.icon}
//       style={checked === index ? { color: "white" } : {}}
//     />
//   )}
//   style={
//     checked === index
//       ? { backgroundColor: "#304FFE", color: "white"}
//       : {}
//   }
//   titleStyle={checked === index ? { color: "white" } : {}}
// /> */}
