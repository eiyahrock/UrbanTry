

// Import React and Component
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import colors from '../colors.js';

import auth from "@react-native-firebase/auth";
const RegScreen = ({ navigation }) => {
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };
    return (
      <ImageBackground style={styles.backgroundimg} source={require("../Assets/bgwlogo.jpg")}>
      <StatusBar backgroundColor={'#fff'}/>
      <SafeAreaView>
        <Text style={styles.title}>Register new account as</Text>
        <View style={styles.container}>
          <TouchableOpacity 
          style={styles.box} 
          onPress={() => navigation.navigate("RegisterScreen")}>
            <View style={styles.textholder}>
              <Text style={styles.TextButton}>
                Buyer
              </Text>
            </View>
            <Image source={require('../Assets/buyer-tile.png')}  style={styles.img}/>
          </TouchableOpacity>
          <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque etiam fringilla nisi ornare. Egestas nam nulla proin mattis ut nibh.
          </Text>
          <TouchableOpacity 
          style={styles.box}
          onPress={() => navigation.navigate("RegisterScreenSeller")}>
            <View style={styles.textholder}>
              <Text style={styles.TextButton}>
                Seller
              </Text>
            </View>
            <Image source={require('../Assets/seller-tile.png')}  style={styles.img}/>
          </TouchableOpacity>
          <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque etiam fringilla nisi ornare. Egestas nam nulla proin mattis ut nibh.
          </Text>  
        </View>
        
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic">  */}
              {/* <View style={styles.container}>
                <View style={styles.Box}>
                  <Text
                  style={styles.SignUpButton}
                  onPress={() => navigation.navigate("RegisterScreen")
                  }>

                  Buyer 
                  </Text>
                  <Text 
                  style={styles.LogInButton} 
                  onPress={() => navigation.replace("RegisterScreenSeller")
                  }>
                    
                  Seller
                  </Text>
                </View>
              </View> */}
        {/* </ScrollView> */}
      </SafeAreaView>
      </ImageBackground>
  );
}


export default RegScreen;
const styles = StyleSheet.create({

  backgroundimg:{
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 65,
    paddingRight: 65,
  },
  title: {
    // flex: 1,
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#3E3627',
    textAlign: 'center',
    marginTop: 70,
  },
  textholder: {
    // position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  TextButton: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#21C622',
    marginTop: 10,
  },
  description: {
    fontFamily: 'Poppins-Light',
    color: '#21C622',
    fontSize: 11,
    marginTop: 10,
    // marginRight: 50,
  }
//   container: {
//     flex: 1,
//     display: 'flex',
//     marginTop: 70,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container1: {
//     flex: 1,
//     display: 'flex',
//     marginTop: 20,
//     flexDirection: "row",
//     justifyContent: 'center',
//     padding: 10,
//   },
//   title: {
//     fontFamily: 'Poppins',
//     fontSize: 32,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     marginBottom: 1,
//     textAlign: "center",
//   },
//   text1:{
//     color:'#3E3627',
//     textAlign: "center",
//     fontSize: 15,
//     margin: 10,
//   },
//   input: {
//     width: 250,
//     height: 40,
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     backgroundColor: 'white',
//   },
//  SignUpButton: {
//     width: 150,
//     fontSize: 16,
//     height: 50,
//     backgroundColor: '#FFFFFF',
//     color: '#3E3627',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontWeight: 'bold',
//     borderRadius: 30,
//     overflow: 'hidden',
//     marginTop: 5,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 1,
//     elevation: 5,
//   },
// LogInButton: {
//     width: 150,
//     fontSize: 16,
//     height: 50,
//     backgroundColor: '#FFFFFF',
//     color: '#3E3627',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontWeight: 'bold',
//     borderRadius: 30,
//     overflow: 'hidden',
//     marginTop: 20,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 1,
//     elevation: 5,
//   },
});
