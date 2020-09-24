import React from "react";

import { Text } from "react-native-paper";
import CashfreePG from "cashfreereactnativepg";

export const PaymentGateway = props => {
  return (
    <CashfreePG
      appId="23752d9480a3944dc844941b625732"
      orderId="9633882121-1"
      orderAmount="100"
      orderCurrency="INR"
      orderNote="This is an order note"
      source="reactsdk"
      customerName="John"
      customerEmail="abc@email.com"
      customerPhone="1234561234"
      paymentModes="cc"
      // upiMode="gpay"
      env="test" //blank for prod
      tokenData="Dl9JCN4MzUIJiOicGbhJCLiQ1VKJiOiAXe0Jye.Cu0nIhhTN5kjZ2UWO5IjZ1IiOiQHbhN3XiwSN1ATN1ETO5UTM6ICc4VmIsIiUOlkI6ISej5WZyJXdDJXZkJ3biwCMwEjOiQnb19WbBJXZkJ3biwiIwADMx0SMyEjM4gzMzYTOiojIklkclRmcvJye.wZURM68KayBvime9ylXq00x3bnX4vd25Ivq5cE0WxXnlPLfGpfNlQx00IVPVVhQOXQ"
      callback={eventData => {
        /*
        callback function that will be executed once the transaction has been completed
        */
       console.log(eventData);
      }}
      {...props}
    />
  );
};

export default PaymentGateway;
