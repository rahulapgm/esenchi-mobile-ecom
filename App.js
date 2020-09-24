import * as React from "react";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createCompatNavigatorFactory } from "@react-navigation/compat";
// import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import { configureStore } from "./store";
import AppNavigator from "./navigation/AppNavigator";
import { navigationRef } from "./RootNavigation";

import { SafeAreaProvider } from "react-native-safe-area-context";

import Toast from './main/hoc/Toast/Toast';
import Loader from './main/hoc/Loader/Loader';

const Stack = createStackNavigator();

const DismissKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);


  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#304FFE',
      accent: '#021aee',
    },
  };

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

      } catch (e) {
        // We might want to provide this error information to an error reporting service
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Provider store={configureStore()}>
          <DismissKeyBoard>
            <SafeAreaProvider>
              <PaperProvider theme={theme}>
                <NavigationContainer
                  ref={navigationRef}
                  initialState={initialNavigationState}
                >
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      options={{
                        headerShown: false
                      }}
                      component={AppNavigator}
                    />
                  </Stack.Navigator>
                </NavigationContainer>
                <Toast />
                <Loader />
              </PaperProvider>
            </SafeAreaProvider>
          </DismissKeyBoard>
        </Provider>
      </View>
    );
                    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
