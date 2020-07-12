import React from "react";

import { View, Text, ScrollView, Alert } from "react-native";

import ShadowBox from "../../../hoc/ShadowBox";
import OrderItem from "../../../containers/Pages/Cart/OrderItem/OrderItem";
import OrderSummary from "./OrderSummary/OrderSummary";
import CheckoutBtn from "./CheckoutBtn/CheckoutBtn";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedSku: ""
    };
  }

  alertOnRemove = obj => {
    console.log(obj.productName);
    const { removeCartProductItem } = this.props;
    const { productId } = obj;
    return Alert.alert(
      null,
      "Do you want to remove '" + obj.productName + "' from Cart?",
      [
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => removeCartProductItem(productId)
        }
      ],
      { cancelable: true }
    );
  };

  renderItemMarkup = obj => {
    const {
      pricingDetails = {},
      productId,
      selectedPricingSkuIndex = ""
    } = obj;
    return (
      <OrderItem
        key={selectedPricingSkuIndex}
        product={obj}
        pricingArrayList={Object.values(pricingDetails)}
        pricingSkuKeys={Object.keys(pricingDetails)}
        alertOnRemove={this.alertOnRemove}
        selectedPricingSkuIndex={selectedPricingSkuIndex}
        updatingProductId={this.props.updatingProductId}
      />
    );
  };

  renderSectionMarkup = (sectionItems, sectionTitle) => {
    return (
      <ShadowBox>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 6,
            fontWeight: "bold",
            fontSize: 16
          }}
        >
          {sectionTitle}
        </Text>
        {sectionItems}
      </ShadowBox>
    );
  };

  render() {
    const { cartDetails = {}, fetchCurrentOrder } = this.props;
    const {
      cartProductItems = [],
      cartTotalAmount = "..",
      cartTotalSavings = "..",
      cartTotalMRPRate = ""
    } = cartDetails;

    const vegetables = [];
    const groceries = [];
    const others = [];

    cartProductItems.map(obj => {
      if (obj.productCategory === "Vegetables") {
        vegetables.push(obj);
      } else if (obj.productCategory === "Groceries") {
        groceries.push(obj);
      } else {
        others.push(obj);
      }
    });

    return (
      <View style={{ flex: 1}}>
        <ScrollView>
          <OrderSummary
            cartTotalAmount={cartTotalAmount}
            cartTotalSavings={cartTotalSavings}
            cartTotalMRPRate={cartTotalMRPRate}
          />

          {cartProductItems.length ? (
            <React.Fragment>
              {vegetables.length > 0 && (
                <ShadowBox>
                  <Text
                    style={{
                      textAlign: "center",
                      paddingVertical: 6,
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    VEGETABLES
                  </Text>
                  {vegetables.map(obj => {
                    return this.renderItemMarkup(obj);
                  })}
                </ShadowBox>
              )}

              {groceries.length > 0 && (
                <ShadowBox>
                  <Text
                    style={{
                      textAlign: "center",
                      paddingVertical: 6,
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    GROCERIES
                  </Text>
                  {vegetables.map(obj => {
                    return this.renderItemMarkup(obj);
                  })}
                </ShadowBox>
              )}

              {others.length > 0 && (
                <ShadowBox>
                  <Text
                    style={{
                      textAlign: "center",
                      paddingVertical: 6,
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    OTHERS
                  </Text>
                  {vegetables.map(obj => {
                    return this.renderItemMarkup(obj);
                  })}
                </ShadowBox>
              )}
            </React.Fragment>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingTop:12
              }}
            >
              <Text style={{fontWeight:"bold", fontSize:16}}>Your Cart is Empty!</Text>
            </View>
          )}
        </ScrollView>

        <CheckoutBtn
          fetchCurrentOrder={fetchCurrentOrder}
          navigation={this.props.navigation}
          updatingProductId={this.props.updatingProductId}
          cartTotalAmount={parseInt(cartTotalAmount)}
        />
      </View>
    );
  }
}

export default Cart;
