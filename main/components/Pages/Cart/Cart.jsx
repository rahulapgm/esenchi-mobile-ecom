import React from "react";
import { Title } from "react-native-paper";
import { View, Text, ScrollView, Alert } from "react-native";

import ShadowBox from "../../../hoc/ShadowBox";
import OrderItem from "../../../containers/Pages/Cart/OrderItem/OrderItem";
import OrderSummary from "./OrderSummary/OrderSummary";
import CheckoutBtn from "./CheckoutBtn/CheckoutBtn";
import { ComboOrderItem } from "./ComboOrderItem/ComboOrderItem";
import EstimatedDelivery from "../../../containers/Pages/ChangeAddress/EstimatedDelivery/EstimatedDelivery";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedSku: ""
    };
  }

  alertOnRemove = obj => {
    const { removeCartProductItem } = this.props;
    const { productId } = obj;
    return Alert.alert(
      null,
      "Do you want to remove '" + obj.productName + "' from Cart?",
      [
        {
          text: "No",
          onPress: () => {},
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
    const { pricingDetails = {}, selectedPricingSkuIndex = "" } = obj;
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

  renderCombosMarkup = comboObj => {
    const { removeComboItem } = this.props;
    return (
      <ComboOrderItem
        key={comboObj.comboName}
        combo={comboObj}
        removeComboItem={removeComboItem}
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
    const { cartDetails = {}, fetchCheckoutItems } = this.props;
    const {
      cartProductItems = [],
      cartTotalAmount = "..",
      cartTotalSavings = "..",
      cartTotalMRPRate = "",
      comboItemsData = []
    } = cartDetails;

    const vegetables = [];
    const groceries = [];
    const others = [];

    cartProductItems.map(obj => {
      if (
        obj.productCategory &&
        obj.productCategory.toLowerCase().indexOf("vegetable") > -1
      ) {
        vegetables.push(obj);
      } else {
        groceries.push(obj);
      }
    });

    return (
      <View style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
        <ScrollView>
          <EstimatedDelivery navigation={this.props.navigation} />
          <OrderSummary
            cartTotalAmount={cartTotalAmount}
            cartTotalSavings={cartTotalSavings}
            cartTotalMRPRate={cartTotalMRPRate}
            {...this.props}
          />
          {comboItemsData && comboItemsData.length ? (
            <ShadowBox style={{ marginTop: 6, backgroundColor: "#f1f1f1" }}>
              <Title
                style={{
                  textAlign: "center",
                  paddingVertical: 6,
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "blue"
                }}
              >
                COMBO PACKS
              </Title>
              {comboItemsData.map(comboObj => {
                return (
                  <React.Fragment key={comboObj.comboName}>
                    {this.renderCombosMarkup(comboObj)}
                  </React.Fragment>
                );
              })}
            </ShadowBox>
          ) : null}
          {cartProductItems.length ? (
            <React.Fragment>
              {vegetables.length > 0 && (
                <ShadowBox
                  style={{
                    padding: 0,
                    marginTop: 12,
                    backgroundColor: "#f1f1f1"
                  }}
                >
                  <Title
                    style={{
                      textAlign: "center",
                      paddingVertical: 6,
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "blue"
                    }}
                  >
                    VEGETABLES
                  </Title>
                  {vegetables.map(obj => {
                    return this.renderItemMarkup(obj);
                  })}
                </ShadowBox>
              )}

              {groceries.length > 0 && (
                <ShadowBox style={{ marginTop: 12 }}>
                  <Title
                    style={{
                      textAlign: "center",
                      paddingVertical: 6,
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    GROCERIES
                  </Title>
                  {groceries.map(obj => {
                    return this.renderItemMarkup(obj);
                  })}
                </ShadowBox>
              )}
            </React.Fragment>
          ) : null}
          {!comboItemsData.length && !cartProductItems.length ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 12
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Your Cart is Empty!
              </Text>
            </View>
          ) : null}
        </ScrollView>

        <CheckoutBtn
          fetchCheckoutItems={fetchCheckoutItems}
          navigation={this.props.navigation}
          updatingProductId={this.props.updatingProductId}
          cartTotalAmount={parseInt(cartTotalAmount)}
        />
      </View>
    );
  }
}

export default Cart;
