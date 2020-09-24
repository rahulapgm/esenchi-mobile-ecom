import React from "react";

import Button from "../../../custom/Button";

export const CheckoutBtn = ({
  fetchCheckoutItems,
  navigation,
  updatingProductId,
  cartTotalAmount
}) => {
  return (
    <Button
      onPress={() => {
        fetchCheckoutItems();
        navigation.navigate("Checkout");
      }}
      isGradient={true}
      gradStart={[0, 0.5]}
      gradEnd={[1, 0.5]}
      gradColors={["#2c22f2", "#2d23ed", "#0a00ff"]}
      gradStyle={{ borderRadius: 5 }}
      viewStyle={{ margin: 2, paddingHorizontal: 32, paddingBottom: 6 }}
      textStyle={{
        padding: 12,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 16
      }}
      btnText="Checkout"
      disabled={
        (updatingProductId && updatingProductId.length > 0) ||
        cartTotalAmount === 0 ||
        false
      }
    />
  );
};

export default CheckoutBtn;
