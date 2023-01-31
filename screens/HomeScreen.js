

// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

//import components
import HeaderTabs from "../components/HeaderTab";

import auth from "@react-native-firebase/auth";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace("Auth"))
              .catch((error) => {
                console.log(error);
                if (error.code === "auth/no-current-user")
                  navigation.replace("Auth");
                else alert(error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
    <StatusBar backgroundColor={'#21C622'}/>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{backgroundColor: '#21C622', padding: 15}}>
        <HeaderTabs/>  
      </View>
      
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
              color: "black",
            }}
          >
            Welcome Urbaners {}
          </Text>
          {user ? (
            <Text style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
              color: "black",
            }}>
              Good Day {""} 
              {user.displayName} 
            </Text>
          ) : null}
          <Text onPress={() =>
                navigation.navigate("Cart")
              }style={styles.button2TextStyle}>
              Go to your Cart
            </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={logout}
          >
            <Text style={styles.buttonTextStyle}>
              LOGOUT
            </Text>
            
          </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
    </>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: "#21C622",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 100,
    marginBottom: 25,
  },
  buttonTextStyle: {
    fontFamily: 'Poppins-Bold',
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  button2TextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "green",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },

});
