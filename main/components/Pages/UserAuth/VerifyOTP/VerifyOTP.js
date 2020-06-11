import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import TextBox from "../../../custom/Textbox/Textbox";
import Brand from "../../../common/Brand/Brand";
import { styles } from "../styles";

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
			otp: "",
		};
	}

	render() {
		const { invokeOTPValidation, userLoginData, isError } = this.props;
		console.log("Verify OTP component Props - ", this.props);
		// console.log(userData.data, "\n", "iserror otp", isError);
		const { otp } = this.state;
		return (
			<View style={styles.container}>
				<View style={{ top: 42, padding: 6 }}>
					<Brand brandIcon={styles.brandIcon} brandFontSize={24} />
				</View>
				<View style={{ top: 64, width: "80%" }}>
					<Text style={{ fontSize: 32, textAlign: "center" }}>
						VERIFICATION CODE
					</Text>
					<Text style={{ marginTop: 36, fontSize: 16 }}>
						We have send you the One-Time-Password(OTP) through SMS. Please
						enter your OTP send on {this.state.customerPh}.
					</Text>
					<TextBox
						textInputStyle={{
							fontSize: 32,
							height: 72,
							textAlign: "center",
							letterSpacing: 48,
							marginTop: 24,
						}}
						isError={isError}
						keyboardType="numeric"
						maxLength={4}
						autoFocus={true}
						placeholder="****"
						onChangeText={(otp) => this.setState({ otp })}
					/>
					{isError && (
						<Text style={{ marginTop: 24, fontSize: 16, color: "red" }}>
							Incorrect OTP, Please enter the OTP as per our SMS.
						</Text>
					)}
					<View style={{ padding: 24 }}>
						<Button
							title="Verify and Continue"
							onPress={() => {
								invokeOTPValidation({ ...userLoginData, otp });
								// RootNavigation.navigate('App')
							}}
						/>
					</View>
				</View>
			</View>
		);
	}
}

export default VerifyOTP;
