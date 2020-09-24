import React, { useState } from "react";
import { Button, HelperText, Subheading, Headline } from "react-native-paper";
import { View, SafeAreaView } from "react-native";

import TextBox from "../../../custom/Textbox/Textbox";
import Brand from "../../../common/Brand/Brand";
import { styles } from "../styles";
import HeaderBackButton from "../../../custom/HeaderBackButton/HeaderBackButton";
import { ScrollView } from "react-native-gesture-handler";
const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
const RED = "#e53935";

class VerifyOTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <ScrollView contentContainerStyle={styles.safeArea}>
        <SafeAreaView style={styles.safeArea}>
        <HeaderBackButton
          navigation={this.props.navigation}
          targetPage="SignIn"
          btnStyle={{
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            top: 12,
            padding:6
          }}
          iconSize={42}
        />

        <View style={styles.container}>

          <Brand brandIcon={styles.brandIcon} brandFontSize={28} brandViewStyle={styles.brandViewStyle}/>
          <Headline
            style={{ fontSize: 24, marginTop: 6, textAlign: "center" }}
          >
            VERIFICATION CODE
          </Headline>
          <Subheading
            style={{ fontSize: 14, textAlign: "justify", paddingHorizontal: 12 }}
          >
            We have send you the One-Time-Password(OTP) through SMS, you will be receiving OTP within 40 sec. Please
            enter your OTP send on {this.state.customerPh}
          </Subheading>

          <View style={{ alignItems:"center", marginTop:12 }}>
            <TextBox
              isError={inCorrectOTP}
              keyboardType="numeric"
              maxLength={4}
              autoFocus={true}
              placeholder="****"
              textInputStyle={{
                fontSize: 28,
                textAlign: "center",
                letterSpacing: 20,
                height: 60,
                width: 300,
                marginBottom: 12,
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

      </ScrollView>

    );
  }
}

export default VerifyOTP;
