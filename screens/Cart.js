

// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import auth from "@react-native-firebase/auth";

const Cart = ({ navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              marginBottom: 100,
              color: "black",
            }}
          >
            CART {}
          </Text>
          {user ? (
            <Text style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
              color: "black",
            }}>
              Your Cart is empty{" "} 
              {user.displayName} 
            </Text>
          ) : null}
          {/* <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={logout}
          >
            <Text style={styles.buttonTextStyle}>
              Logout
            </Text> */}
            {/* <Text onPress={() =>
                navigation.navigate("Contact")
              }style={styles.button2TextStyle}>
              Contact Us Here!
            </Text> */}
          {/* </TouchableOpacity> */}
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
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
