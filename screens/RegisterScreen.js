
// Import React and Component
import React, { useState, createRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import auth from "@react-native-firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userLoc, setUserLoc] = useState("");
  const [errortext, setErrortext] = useState("");

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
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
            "The email address is already in use!"
          );
        } else {
          setErrortext(error.message);
        }
      });
  };

  return (
    <ImageBackground style={styles.backgroundimg} source={require("../Assets/bgwlogo.jpg")}>
    <StatusBar translucent={true} backgroundColor={'transparent'}/>
    <SafeAreaView style={styles.mainBody}>
      {/*<ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >*/}
        
        {/*<KeyboardAvoidingView enabled>*/}
        <View>
              <Text style={styles.title}>Register as Buyer</Text>
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
              placeholder="Email address"
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
              placeholder="Complete Address"
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
          <View style={styles.policy}>
            <Text style={styles.policyText}>
              By tapping register, this means that you have agreed to our
            </Text>
            <Text style={styles.policyTextSpan}>
              Terms & Conditions and Privacy Policy.
            </Text>
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
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>
              REGISTER
            </Text>
            
          </TouchableOpacity>
        {/* </KeyboardAvoidingView> */}
        {/* <Text
              style={styles.registerTextStyle}
              onPress={() =>
                navigation.navigate("RegisterScreenSeller")
              }
            >
              Are you a Retailer or Wholesaler? Click Here
            </Text> */}
      {/* </ScrollView> */}
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
export default RegisterScreen;

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
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 0,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#3E3627',
    fontSize: 40,
    marginTop: 40,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 20,
    // margin: 10,
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '#21C622',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 80,
  },
  buttonStyle: {
    backgroundColor: "#21C622",
    borderWidth: 0,
    color: "#000000",
    borderColor: "#21C622",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 0,
    marginBottom: 10,
  },
  buttonTextStyle: {
    fontFamily: 'Poppins',
    fontWeight: "bold",
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
  },
  policy: {
    alignItems: 'center',
  },
  policyText: {
    fontFamily: 'Popping-Regular',
    fontSize: 12,
  },
  policyTextSpan: {
    fontFamily: 'Popping-Regular',
    fontSize: 12,
    color: '#264CD0',
    marginBottom: 10,
  },
  // registerTextStyle: {
  //   color: "#FFFFFF",
  //   textAlign: "center",
  //   fontWeight: "bold",
  //   fontSize: 12,
  //   alignSelf: "center",
  //   borderWidth: 1,
  //   borderRadius: 20,
  //   borderColor: "green",
  //   backgroundColor: "green",
  //   padding: 5,
  // },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
