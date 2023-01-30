

// Import React and Component
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
} from 'react-native';
import colors from '../colors.js';

import auth from "@react-native-firebase/auth";
const LogReg = ({ navigation }) => {
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };
    return (
      <ImageBackground style={styles.backgroundimg} source={require("../Assets/bg1.png")}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>
      <SafeAreaView>
        
        <ScrollView contentInsetAdjustmentBehavior="automatic"> 
              <View style={styles.container1}>
              <Image style={styles.logo} source={require("../Assets/text-logo-white.png")}></Image>
              </View>

              <View style={styles.container}>
                <View style={styles.Box}>
                  
                  <Text
              style={styles.SignUpButton}
              onPress={() =>
                navigation.navigate("LoginScreen")
              }>
              Login
            </Text>
                  <Text style={styles.LogInButton} onPress={() =>
                navigation.replace("RegScreen")
              }>Register</Text>
                </View>
              </View>
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>
  );
}


export default LogReg;
const styles = StyleSheet.create({
  //Unused styles yet...
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  logo:{
    resizeMode: 'cover',
    width: 300,
    height: 190,
    marginTop: 20,
  },
  backgroundimg:{
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    marginTop: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    display: 'flex',
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 1,
    textAlign: "center",
  },
  text1:{
    color:'#3E3627',
    textAlign: "center",
    fontSize: 15,
    margin: 10,
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
  },
 SignUpButton: {
    width: 150,
    fontSize: 16,
    height: 50,
    backgroundColor: '#FFFFFF',
    color: '#3E3627',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
LogInButton: {
    width: 150,
    fontSize: 16,
    height: 50,
    backgroundColor: '#FFFFFF',
    color: '#3E3627',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
});
