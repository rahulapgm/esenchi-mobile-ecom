import React, { Suspense, lazy } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProductSearch from "../main/containers/ProductSearch";
import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  View
} from "react-native";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import { useSafeArea } from "react-native-safe-area-context";

import Brand from "../main/components/common/Brand/Brand";
import HomePage from "../main/containers/Pages/HomePage/HomePage";

import CategoryDrawer from "../main/containers/CategoryDrawer/CategoryDrawer";

const Stack = createStackNavigator();

export const HomeScreen = ({ navigation }) => {
  const insets = useSafeArea();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeMain" component={HomePage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  brandIcon: {
    flex: 1,
    width: 48,
    resizeMode: "contain"
  },
  brandTitle: { flex: 0.5, marginHorizontal: 2 },
  brandViewStyle: {
    marginHorizontal: 12,
    paddingVertical: 6,
    position: "relative"
  }
});

const Drawer = createDrawerNavigator();

export const homeWithCategoryNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "#FFFFFF",
        width: 300
      }}
      drawerContent={props => <CategoryDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63"
      }}
      drawerPosition={Platform.OS === "ios" ? "left" : "right"}
      drawerType="front"
    >
      <Drawer.Screen
        name="GoToHome"
        options={{ drawerLabel: "Home" }}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

export default homeWithCategoryNavigator;

// export const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Suspense fallback={<View></View>}>
//         <HomePageLazy {...this.props} />
//       </Suspense>
//     </View>
//   );
// };

// headerTitle: props => <ProductSearch {...props} />,
// headerLeft: props => (
//   <Brand
//     {...props}
//     brandIcon={styles.brandIcon}
//     brandTitle={styles.brandTitle}
//     brandViewStyle={styles.brandViewStyle}
//   />
// ),
// headerRight: props => (
//   <TouchableOpacity
//     onPress={() => navigation.toggleDrawer()}
//     style={{
//       color: "#0099ff",
//       backgroundColor: "white",
//       fontSize: 20,
//       paddingHorizontal: 26
//     }}
//   >
//     <MaterialCommunityIcons name="menu" size={36} />
//   </TouchableOpacity>
// )
