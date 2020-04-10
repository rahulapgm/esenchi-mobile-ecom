import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';

import AuthManager from '../screens/AuthManger';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import SignInScreen from '../screens/SignInScreen'
import BottamTabNavigator  from './BottomTabNavigator';


const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    AuthManager: { screen: AuthManager},
    SignIn: { screen: SignInScreen, },
    App: { screen: BottamTabNavigator },
    OTPVerifyScreen: {screen: OTPVerificationScreen}
  },
  {
    initialRouteName: 'AuthManager',
    headerMode: 'none',
  }
);

// export const dummy = () => {
//   <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="Profile" component={BottamTabNavigator} />
//         <Stack.Screen name="OTPVerifyScreen" component={OTPVerificationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
// }

export default AppNavigator;
