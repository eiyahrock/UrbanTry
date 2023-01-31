import { View, Text, Image } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


export default function HeaderTabs() {
  return (
    <View style={{flexDirection: 'row'}}>
      <GooglePlacesAutocomplete 
      placeholder='Search a fruit or store...'
      styles={{
        textInput:{
          backgroundColor: '#FFF',
          borderRadius: 7,
          color: '#21C622',
        },
        textInputContainer: {
          backgroundColor: "#FFF",
          color: '#fff',
          borderRadius: 7,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 20,
        //   margin: 10,
        },
      }}
      renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Image style={{height: 20, width: 20, tintColor: '#939393'}} source={require("../Assets/search.png")}/>
          </View>
        )}
      />
      <View style={{marginRight: 10, justifyContent: 'center' }}>
              <Image style={{height: 20, width: 20, tintColor: '#fff'}} source={require("../Assets/menu.png")}/>
            </View>

        
    </View>
  )
}