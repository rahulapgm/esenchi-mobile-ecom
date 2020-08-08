import React, { useState } from "react";
import { styles } from "./styles";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from "react-native";

import { TextInput, Subheading, HelperText, Button } from "react-native-paper";

import Brand from "../../common/Brand/Brand";

import * as RootNavigation from "../../../../RootNavigation";

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
      customerPh: "",
      showInvalidPhNumberError: false,
      location: null
    };
  }

  handleChange = phoneNumber => {
    const phNumber = "+91" + phoneNumber;
    this.setState({ customerPh: phNumber, showInvalidPhNumberError: false });
  };

  handleUserSignIn = () => {
    const { verifyUserLogin } = this.props;
    const { customerPh } = this.state;
    if (!customerPh || customerPh.length !== 13) {
      this.setState({ showInvalidPhNumberError: true });
    } else {
      verifyUserLogin({ customerPh });
      RootNavigation.navigate("OTPVerifyScreen");
    }
  };

  render() {
    const { showInvalidPhNumberError, customerPh } = this.state;
    const { onBlur, onFocus } = this.props;
    return (
      <DismissKeyBoard>
        <SafeAreaView style={styles.container}>
          <View style={{ top: 42, padding: 6 }}>
            <Brand brandIcon={styles.brandIcon} brandFontSize={24} />
          </View>
          <View style={styles.signInView}>
            <Subheading style={styles.welcomeMsg}>
              Welcome, Let's get started!
            </Subheading>
            <View style={styles.userInputs}>
              <Subheading style={{ fontSize: 16 }}>Mobile Number:</Subheading>
              <TextInput
                mode="flat"
                isError={showInvalidPhNumberError && !customerPh}
                keyboardType="numeric"
                maxLength={10}
                autoFocus={true}
                style={{ backgroundColor: "white", fontSize: 24 }}
                onChangeText={phoneNumber => this.handleChange(phoneNumber)}
                error={showInvalidPhNumberError}
              />
              <HelperText
                type="error"
                visible={showInvalidPhNumberError}
              >
                Invalid Phone number, Please correct
              </HelperText>

              <View style={{ padding: 16 }}>
                <Button mode="contained" onPress={this.handleUserSignIn}>
                  LOGIN
                </Button>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </DismissKeyBoard>
    );
  }
}

export default UserAuth;

/* <View style={styles.inputItem}>
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
              </View> */
