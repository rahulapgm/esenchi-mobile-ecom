import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { View, ActivityIndicator, StatusBar, Alert } from "react-native";
import HomePageComponent from "../../../components/Pages/HomePage/HomePage";

import { getCategoryList } from "../../CategoryDrawer/actions";
import { makeSelectCategoryList } from "../../CategoryDrawer/selectors";
import toJS from '../../../hoc/toJS/toJS';

import { getUserAddress } from "../ChangeAddress/actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoryList();
    this.props.getUserAddress();
  }
  render() {
    return <HomePageComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryList: () => dispatch(getCategoryList()),
    getUserAddress: () => dispatch(getUserAddress())
  };
};
const mapStateToProps = createStructuredSelector({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HomePage));

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
