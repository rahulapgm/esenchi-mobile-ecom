import React, {Suspense, lazy} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ProductSearch from "../main/containers/ProductSearch";
import {StyleSheet, Platform} from "react-native";

import HomePage from "../main/containers/Pages/HomePage/HomePage";

const Stack = createStackNavigator();

export const HomeScreen = ({navigation}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeMain"
				component={HomePage}
				options={{
					headerStyle: {
						height: Platform.OS === "ios" ? 102 : 72,
					},
					headerTitle: (props) => <ProductSearch {...props} />,
				}}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
});

export default HomeScreen;

// export const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Suspense fallback={<View></View>}>
//         <HomePageLazy {...this.props} />
//       </Suspense>
//     </View>
//   );
// };
