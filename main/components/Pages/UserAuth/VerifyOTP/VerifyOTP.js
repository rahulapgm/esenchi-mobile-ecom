import React, { useState } from "react";
import { Button, HelperText, Subheading, Headline } from "react-native-paper";
import { View, SafeAreaView } from "react-native";

import TextBox from "../../../custom/Textbox/Textbox";
import Brand from "../../../common/Brand/Brand";
import { styles } from "../styles";
import HeaderBackButton from "../../../custom/HeaderBackButton/HeaderBackButton";
const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
const RED = "#e53935";

class VerifyOTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerPh: "+919633882121",
      pinCode: "678531",
      customerName: "Rahul Arunachalam",
      otp: ""
    };
  }

  render() {
    const {
      invokeOTPValidation,
      userLoginData,
      inCorrectOTP
    } = this.props;
    const { otp } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <HeaderBackButton
          navigation={this.props.navigation}
          targetPage="SignIn"
          btnStyle={{
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            top: 12
          }}
          iconSize={36}
        />

        <View style={styles.container}>
          <View>
            <Brand brandIcon={styles.brandIcon} brandFontSize={24} />
          </View>

          <Headline
            style={{ fontSize: 32, marginTop: 32, textAlign: "center" }}
          >
            VERIFICATION CODE
          </Headline>
          <Subheading
            style={{ fontSize: 14, textAlign: "justify", padding: 32 }}
          >
            We have send you the One-Time-Password(OTP) through SMS. Please
            enter your OTP send on {this.state.customerPh}.
          </Subheading>

          <View style={{ alignItems:"center" }}>
            <TextBox
              isError={inCorrectOTP}
              keyboardType="numeric"
              maxLength={4}
              autoFocus={true}
              placeholder="****"
              textInputStyle={{
                fontSize: 32,
                textAlign: "center",
                letterSpacing: 20,
                height: 72,
                width: 300,
                marginBottom: 20,
              }}
              onChangeText={otp => {
                if (inCorrectOTP) {
                  this.props.setInCorrectOTPValue(false);
                }
                this.setState({ otp });
              }}
            />
            {inCorrectOTP && (
              <HelperText type="error" style={{marginBottom:12, fontSize:14}}>
                  Incorrect OTP, Please enter the OTP as per our SMS.
              </HelperText>
            )}

            <Button
              mode="contained"
              onPress={() => {
                invokeOTPValidation({ ...userLoginData, otp });
              }}
            >
              VERIFY & CONTINUE
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default VerifyOTP;
