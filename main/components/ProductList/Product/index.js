import React from "react";
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  Image,
  TouchableOpacity,
  Picker
} from "react-native";
// import Button from "../../custom/Button/Button";

import { styles } from "./productStyles";
import Dropdown from "../../custom/Dropdown";

const Product = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imgSection}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://www.bigbasket.com/media/uploads/p/m/10000272_11-fresho-carrot-ooty.jpg"
          }}
        />
        <Text style={styles.prdNameText}>Carrots</Text>
      </View>
      <View style={styles.prdDescriptionSec}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              textAlign: "left",
              padding: 6,
              fontSize: 16,
              fontWeight: "500"
            }}
          >
            Quantity:
          </Text>
          <Dropdown />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginLeft: 32,
            padding: 6
          }}
        >
          <Text
            style={{
              textAlign: "left",
              padding: 6,
              fontSize: 16,
              fontWeight: "500"
            }}
          >
            Price:
          </Text>
          <Text style={{ padding: 6, marginLeft: 12, fontSize: 14 }}>
            24 RS.
          </Text>
        </View>
        <View style={{ ...styles.buttonGroup }}>
          <TouchableOpacity
            style={{
              width: "48%",
              backgroundColor: "#2e5ef0",
              borderRadius: 4,
              color: "white",
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 1.0,
              elevation: 5,
              margin: "1%"
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                padding: 6,
                textAlign: "center"
              }}
            >
              BUY NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "48%",
              backgroundColor: "white",
              borderRadius: 4,
              borderWidth: 2,
              borderColor: "#2e5ef0",
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 1.0,
              elevation: 5,
              margin: "1%"
            }}
          >
            <Text
              style={{
                color: "#2e5ef0",
                padding: 6,
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              ADD TO BAG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;
