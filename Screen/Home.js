import React, { Component } from 'react'
import { View, Text,Linking, TouchableOpacity,Image, TextInput, StyleSheet } from 'react-native'


export default function Home(props) {
  return (
    <View style = {styles.container}>
            <Image
            style={styles.tinyLogo}
            source={{
               uri: 'https://img2.pngio.com/download-free-png-bridgestone-logo-hd-png-information-carlogos-bridgestone-png-1920_1080.png',
            }}
            />
            <Text  style = {styles.login}> Welcome to Zurvos</Text>
            <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("SignUp")
                  }>
                  <Text style = {styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>

            <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Login")
                  }>
                  <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <Text  style = {styles.text}> or Continue with</Text>
            <TouchableOpacity
                  style = {styles.facebook}
                  onPress={() => {
                     Linking.openURL('https://facebook.com');
                   }}>
                  <View style={styles.checkboxContainer}>
               <Image source={require('./images/fb.jpg')}  style={{width: 20, alignSelf: "center" ,height: 20, margin:10}} />
               <Text style={{ color: 'white', alignSelf: "center" }}>FaceBook</Text>
           </View>
            </TouchableOpacity>
          
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
     paddingTop:20,
     height:'auto',
     flex:1,
     backgroundColor:"#F2F7FB",
  },
  tinyLogo: {
   width: 100,
   height: 100,
   alignSelf:"center",
 },
 fb: {
   width: 20,
   height: 20,
   marginTop:10,
   marginLeft:20
 },
 checkboxContainer: {
   flexDirection: "row",
   alignSelf:"center",
   textAlign:"center",
   borderRadius:5,
   width:120,
   height: 40,
   marginBottom:'2%',
   backgroundColor:'#4267B3',
//
//   flex:1,
 },
  submitButton: {
     alignSelf:"center",  
     padding: 13,
     borderColor:"#216DDB",
     borderRadius:5,
     width:"90%",
     height: 50,
     marginBottom:'2%',
     backgroundColor:'#216DDB',
     borderWidth:3
  },
  facebookText:{
     color: 'white',
     textAlign: 'center',
     backgroundColor:'#4267B3' ,
     marginTop:10,
     marginLeft:20
  },

submitButtonText:{
   color: 'white',
   textAlign: 'center',
   backgroundColor:'#216DDB'    
},
  login:{
    color:"Black",
    textAlign: 'center',
    fontSize:35,
    fontWeight: 'bold',
    marginBottom:'6%',
  },
  text:{
   color:"Black",
   textAlign: 'center',
   fontSize:16,
   fontWeight: 'bold',
   marginBottom:'6%',
 }
})