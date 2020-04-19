import React from "react";
import { connect } from "react-redux";
import { View, ActivityIndicator, StatusBar, Alert } from "react-native";
import HomePageComponent from "../../../components/Pages/HomePage/HomePage";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// const token = AsyncStorage.getItme("userToken");
		// if (this.props.loader) {
		//   return (
		//     <View
		//       style={{
		//         flexDirection: "column",
		//         justifyContent: "center",
		//         alignItems: "center",
		//         top: 32
		//       }}
		//     >
		//       <ActivityIndicator />
		//     </View>
		//   );
		// } else if (this.props.isError) {
		//   <View
		//     style={{
		//       flexDirection: "column",
		//       justifyContent: "center",
		//       alignItems: "center",
		//       top: 32
		//     }}
		//   >
		//     {Alert.alert(
		//       "Wrong OTP",
		//       "You have entered wrong otp key, please try again!",
		//       [
		//         {
		//           text: "OK",
		//           onPress: () => this.props.navigation.navigate("Auth")
		//         }
		//       ],
		//       { cancelable: false }
		//     )}
		//   </View>;
		// }
		return <HomePageComponent />;
	}
}

const mapDispatchToProps = () => {
	return {};
};
const mapStateToProps = (state) => {
	return {
		// loader: (state.plpReducers.loader && state.plpReducers.loader) || false,
		// isError:
		//   (state.loginReducer.userLoginData.wrongOtp &&
		//     state.loginReducer.userLoginData.wrongOtp) ||
		//   false
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
