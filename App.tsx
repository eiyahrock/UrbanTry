/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import TabNavigator from 'react-native-tab-navigator';

// Import Screens
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import RegScreen from "./screens/RegScreen";
import RegisterScreenSeller from "./screens/RegisterScreenSeller";
import Splash1 from "./screens/Splash1";

const Stack = createStackNavigator();



const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegScreen"
        component={RegScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreenSeller"
        component={RegisterScreenSeller}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#4CBB17", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }
      }
      />

  
        {/* <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#4CBB17", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }
      }
      /> */}
   
      {/* <Stack.Screen
        name="RegisterScreenSeller"
        component={RegisterScreenSeller}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

/* Main Navigator */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash1">
        {/* SplashScreen which will come once for 2 Seconds */}
        
        <Stack.Screen
          name="Splash1"
          component={Splash1}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        /><Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator which include Login Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home", //Set Header Title
            headerStyle: {
              backgroundColor: "#4CBB17", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



