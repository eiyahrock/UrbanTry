
import React from 'react';
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





// Import React and Component


import auth from "@react-native-firebase/auth";
import colors from '../colors.js';

const Splash1 = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };
    return (
      <ImageBackground style={styles.backgroundimg} source={require("../Assets/kiwi-splashscreen-edited.png")}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>
      <SafeAreaView>
        
        <ScrollView contentInsetAdjustmentBehavior="automatic"> 
              <View style={styles.container1}>
              <Image style={styles.logo} source={require("../Assets/logo-neon-green.png")}></Image>
              </View>

              <View style={styles.container}>
                <View style={styles.Box}>
                    
                  <Text style={styles.title}>Quick delivery at your doorstep!</Text>
                  <Text style={styles.text1}>Welcome to UrbanFresh! You can find different types of produce and this will be delivered straight to your home.</Text>
                  <Text style={styles.getStartedButton}onPress={() =>
                    navigation.navigate("SplashScreen")
                    }>Get Started</Text>
                </View>
              </View>
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>
  );
    
};

export default Splash1;

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
      width: 100,
      height: 100,
    },
    backgroundimg:{
      flex: 1,
    },
    container: {
      flex: 1,
      display: 'flex',
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
      flex: 1,
      display: 'flex',
      marginTop: 20,
      flexDirection: "row",
      justifyContent: 'flex-end',
      padding: 10,
    },
    Box: {
      alignItems: 'center',
      marginTop:270,
      width: 320,
      height: 270,
      backgroundColor: '#21C622',
      padding: 10,
      borderRadius: 20,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 5,
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 32,
      color: '#FFFFFF',
      // fontWeight: 'bold',
      marginBottom: 1,
      textAlign: "center",
    },
    text1:{
      fontFamily: 'Poppins-Regular',
      color:'#3E3627',
      textAlign: "center",
      fontSize: 13,
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
    getStartedButton: {
      fontFamily: 'Poppins-Regular',
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
  });
