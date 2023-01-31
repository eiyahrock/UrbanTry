
// Import React and Component
import React, { useState, createRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import auth from "@react-native-firebase/auth";

const RegisterScreenSeller = ({ navigation }) => {
  const [usertype, setUsertype] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userLoc, setUserLoc] = useState("");
  const [errortext, setErrortext] = useState("");

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
    if (!usertype) return alert("Please fill Type");
    if (!userName) return alert("Please fill Name");
    if (!userEmail) return alert("Please fill Email");
    if (!userPassword) return alert("Please fill Password");
    if (!userLoc) return alert("Please fill Address");


    auth()
      .createUserWithEmailAndPassword(
        userEmail,
        userPassword
      )
      .then((user) => {
        console.log(
          "Registration Successful. Please Login to proceed"
        );
        console.log(user);
        if (user) {
          auth()
            .currentUser.updateProfile({
              displayName: userName,
              photoURL:
                "C:\Users\Eiyah\Desktop\React\UrbanTry\Image\logo-neon-green.png",
            })
            .then(() => navigation.replace("HomeScreen"))
            .catch((error) => {
              alert(error);
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setErrortext(
            "That email address is already in use!"
          );
        } else {
          setErrortext(error.message);
        }
      });
  };

  return (
    <ImageBackground style={styles.backgroundimg} source={require("../Assets/bgwlogo.jpg")}>
    <StatusBar translucent={true} backgroundColor={'transparent'}/>
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
              <Text style={styles.title}>Register as Seller </Text>
        </View>
        {/* <View style={{ alignItems: "center" }}>
              <Image
                source={require("../Assets/logo.png")}
                style={{
                  width: "75%",
                  height: 200,
                  resizeMode: "contain",
                  // marginTop: 40,
                  marginBottom: 10,
                }}
          />
        </View> */}
        <KeyboardAvoidingView enabled>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserType) =>
                setUsertype(UserType)
              }
              underlineColorAndroid="#f000"
              placeholder="Are you a Retailer or Wholesaler"
              placeholderTextColor="#939393"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) =>
                setUserName(UserName)
              }
              underlineColorAndroid="#f000"
              placeholder="Full Name"
              placeholderTextColor="#939393"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) =>
                setUserEmail(UserEmail)
              }
              underlineColorAndroid="#f000"
              placeholder="E-mail Address"
              placeholderTextColor="#939393"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#939393"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserLoc) =>
                setUserLoc(UserLoc)
              }
              underlineColorAndroid="#f000"
              placeholder="Your Store Address"
              placeholderTextColor="#939393"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>
              {" "}
              {errortext}{" "}
            </Text>
          ) : null}

          <View style={styles.policy}>
            <Text style={styles.policyText}>
              By tapping register, this means that you have agreed to our
            </Text>
            <Text style={styles.policyTextSpan}>
              Terms & Conditions and Privacy Policy.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "white",
        }}
      >
        React Native Firebase Authentication
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "white",
        }}
      >
        www.aboutreact.com
      </Text> */}
    </SafeAreaView>
    </ImageBackground>
  );
};
export default RegisterScreenSeller;

const styles = StyleSheet.create({
  backgroundimg: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
    margin: 5,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#3E3627',
    fontSize: 40,
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35,
    // marginBottom: 10,
    // margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#21C622",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    // marginTop: 20,
    marginBottom: 20,
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
    borderColor: "#21C622",
    fontSize: 14,
  },
  policy: {
    alignItems: 'center',
  },
  policyText: {
    fontFamily: 'Popping-Regular',
    fontSize: 12,
    marginTop: 10,
  },
  policyTextSpan: {
    fontFamily: 'Popping-Regular',
    fontSize: 12,
    color: '#264CD0',
    marginBottom: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
