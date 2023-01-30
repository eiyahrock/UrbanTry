

// Import React and Component
import React, { useState, createRef } from "react";

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        console.log(user);
        // If server response message same as Data Matched
        if (user) navigation.replace("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email")
          setErrortext(error.message);
        else if (error.code === "auth/user-not-found")
          setErrortext("No User Found");
        else {
          setErrortext(
            "Please check your email id or password"
          );
        }
      });
  };

  return (
    <ImageBackground style={styles.backgroundimg} source={require("../Assets/bgwlogo.jpg")}>
    <StatusBar translucent={true} backgroundColor={'transparent'}/>
    <SafeAreaView style={styles.mainBody}>
      {/* <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      > */}
        <View>
          {/* <KeyboardAvoidingView enabled> */}
            <View>
              <Text style={styles.title}>Log in to lorem ipsum dolor </Text>
              <Text style={styles.subtitle}>Address Line lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </Text>
              
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Please Enter Email" //dummy@abc.com
                placeholderTextColor="#939393"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Please Enter Password" //12345
                placeholderTextColor="#939393"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>
                {" "}
                {errortext}{" "}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() =>
                navigation.navigate("RegScreen")
              }
            >
              New user? Create an account here
            </Text>
          {/* </KeyboardAvoidingView> */}
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
    </ImageBackground>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  backgroundimg:{
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  mainBody: {
    flex: 1,
    // justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#3E3627',
    fontSize: 40,
    marginTop: 70,
    marginLeft: 35,
    marginRight: 35,
    // marginBottom: 50,
    // margin: 10,
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '#21C622',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 60,
  },
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#21C622",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#21C622",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    fontFamily: 'Poppins-Bold',
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#7DE24E",
    // borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#264CD0",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: "#7DE24E",
    // backgroundColor: "green",
    padding: 5,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
