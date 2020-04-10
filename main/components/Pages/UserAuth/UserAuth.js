import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { styles } from "./styles";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert
} from "react-native";

import Button from "../../custom/Button/Button.js";
import TextBox from "../../custom/Textbox/Textbox";
import Brand from "../../common/Brand/Brand";

import * as RootNavigation from '../../../../RootNavigation';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
const RED = "#e53935";

const DismissKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class UserAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataloaded: false,
      customerPh: "+919633882121",
      showInvalidPhNumberError: false,
      location: null,
      pinCode: "678531",
      customerName: "Rahul"
    };
    this.findCoordinates();
  }

  handleChange = phoneNumber => {
    const phNumber = "+91" + phoneNumber;
    this.setState({ customerPh: phNumber, showInvalidPhNumberError: false });
  };

  handleUserSignIn = () => {
    const { verifyUserLogin } = this.props;
    const { customerPh, customerName, pinCode } = this.state;
    if (
      !customerPh ||
      customerPh.length !== 13 ||
      this.state.pinCode === "" ||
      this.state.pinCode < 6 ||
      this.state.customerName === "" ||
      this.state.customerName.length < 3
    ) {
      this.setState({ showInvalidPhNumberError: true });
    } else {
      Alert.alert(
        "Confirm Details",
        `Name: ${customerName} \nPhone No: ${customerPh} \nPin Code: ${pinCode}`,
        [
          {
            text: "Confirm and Login",
            onPress: () => {
              verifyUserLogin({ customerPh, customerName, pinCode });
              RootNavigation.navigate("OTPVerifyScreen");
            }
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    const {
      isFocused,
      showInvalidPhNumberError,
      pinCode,
      customerPh,
      customerName
    } = this.state;
    const { onBlur, onFocus } = this.props;
    return (
      <DismissKeyBoard>
        <View style={styles.container}>
          <View style={{ top: 42, padding: 6 }}>
            <Brand brandIcon={styles.brandIcon} brandFontSize={24} />
          </View>
          <View style={styles.signInView}>
            <Text style={styles.welcomeMsg}>Welcome, Let's get started!</Text>
            <View style={styles.userInputs}>
              <View style={styles.inputItem}>
                <Text style={{ fontSize: 16 }}>Mobile Number:</Text>
                <TextBox
                  textInputStyle={{ padding: 10, fontSize: 16 }}
                  isError={showInvalidPhNumberError && !customerPh}
                  placeholder="Enter your 10 digit mobile number"
                  keyboardType="numeric"
                  maxLength={10}
                  autoFocus={true}
                  onChangeText={phoneNumber => this.handleChange(phoneNumber)}
                />
              </View>
              <View style={styles.inputItem}>
                <Text style={{ fontSize: 16 }}>Name: </Text>
                <TextBox
                  textInputStyle={{ padding: 10, fontSize: 16 }}
                  placeholder="Enter Your Name"
                  maxLength={20}
                  isError={
                    showInvalidPhNumberError &&
                    (customerName === "" || customerName.length < 2)
                  }
                  onChangeText={customerName =>
                    this.setState({
                      customerName,
                      showInvalidPhNumberError: false
                    })
                  }
                />
              </View>
              <View style={styles.inputItem}>
                <Text style={{ fontSize: 16 }}>Pin Code:</Text>
                <TextBox
                  textInputStyle={{ padding: 10, fontSize: 16 }}
                  placeholder="Enter Your Pincode"
                  keyboardType="numeric"
                  maxLength={6}
                  isError={
                    showInvalidPhNumberError &&
                    (pinCode === "" || pinCode.length < 1)
                  }
                  onChangeText={pinCode =>
                    this.setState({ pinCode, showInvalidPhNumberError: false })
                  }
                />
              </View>
              {showInvalidPhNumberError && (
                <View style={{ margin: "1%" }}>
                  <Text style={{ top: "2%", color: "red" }}>
                    {(pinCode === "" || pinCode.length < 6) &&
                      "* Invalid Pincode, Please correct."}
                  </Text>
                  <Text style={{ top: "1%", color: "red" }}>
                    {(customerPh === "+91" || customerPh.length !== 13) &&
                      "* Invalid Phone number, Please correct."}
                  </Text>
                  <Text style={{ top: "1%", color: "red" }}>
                    {(customerName.length < 3 || customerName === "") &&
                      "* Please provide valid name"}
                  </Text>
                </View>
              )}
              <View style={{ padding: 32 }}>
                <Button
                  onPress={this.handleUserSignIn}
                  isGradient={true}
                  gradStart={[0, 0.5]}
                  gradEnd={[1, 0.5]}
                  gradColors={["#2196F3", "#29B6F6", "#4FC3F7"]}
                  gradStyle={{ borderRadius: 5 }}
                  viewStyle={styles.gradient}
                  textStyle={styles.buttonText}
                  btnText="Login"
                />
              </View>
            </View>
          </View>
        </View>
      </DismissKeyBoard>
    );
  }
}

export default UserAuth;
