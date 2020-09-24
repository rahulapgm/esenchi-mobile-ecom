import React, {useState} from "react";
import { View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Headline, Subheading, FAB, Title } from "react-native-paper";
import OrderConfirmation from "../../../containers/Pages/OrderConfirmation/OrderConfirmation";

export const OrderSuccess = (props) => {
  // https://www.ksbminfotech.com/img/landing_page_img/grocery-icon.png

  const [showOrderDetail, setOrderDetailVisibility] = useState(false);

  if(showOrderDetail){
    return <OrderConfirmation showOrderDetail={showOrderDetail} setOrderDetailVisibility={setOrderDetailVisibility} {...props}/>
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 24
      }}
    >
      <Title style={{ marginVertical: 24, fontSize: 28 }}>Order Placed!!</Title>
      <Subheading style={{ padding: 12, textAlign: "justify" }}>
        Thank you for shopping at esenchi. Your order was successfully placed
        and is being prepared for delivery.
      </Subheading>
      <Image
        style={{
          height: 200,
          width: "100%",
          resizeMode: "center",
          marginBottom: 12
        }}
        source={{
          uri:
            "https://i.pinimg.com/originals/51/ce/e6/51cee67564790d275cac21c4b754d8bb.gif"
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FAB
          style={{ padding: 6, width: 200, fontSize: 16, marginVertical: 12 }}
          label="BACK TO STORE"
          onPress={() => {}}
          extended
        />
        <TouchableOpacity onPress={()=> {setOrderDetailVisibility(true)}}>
          <Subheading style={{ marginVertical: 12 }}>
            View Order Details
          </Subheading>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;
