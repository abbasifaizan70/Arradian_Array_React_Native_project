import React,  { useState } from 'react'
import { View, Text,TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { block } from 'react-native-reanimated';


export default function Login(props) {
   
  return (
    <View style = {styles.container}>
            <Text  style = {styles.login}> Sign UP</Text>
            <Text style={styles.label}> Enter your personal information </Text>
            <View style={{flex: 1, marginHorizontal:50}}>
               <Text style = {styles.input_label}>Full Name</Text>
               <TextInput style = {styles.input}
                  placeholder = "Your Full Name "
                  placeholderTextColor = "#8f9da9"
               />
               <Text style = {styles.input_label}>Email</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Your Email Address"
                  placeholderTextColor = "#8f9da9"
               />
               <Text style = {styles.input_label}>Password</Text>
               <TextInput style = {styles.input}
                  placeholder = "******"
                  placeholderTextColor = "#8f9da9"
               />
               <Text style = {styles.input_label}>Re-enter Password</Text>
               <TextInput style = {styles.input}
                  placeholder = "******"
                  placeholderTextColor = "#8f9da9"
               />
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Login")
                  }>
                  <Text style = {styles.submitButtonText}> NEXT</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style = {styles.ResetButton}
                  onPress = {
                     () => props.navigation.navigate("Login")
                  }>
                  <Text style = {styles.ResetButtonText}> Skip</Text>
               </TouchableOpacity>
               
            </View>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
     paddingTop:20,
     backgroundColor:"#F2F7FB",
     height:'auto',
     flex:1
  },
  checkboxContainer: {
   flexDirection: "row",
   borderColor:"black"
 },
 checkbox: {
   alignSelf: "center",
   
 },
 label: {
   color:"black",
   textAlign: 'center',
   fontSize:14,
   fontWeight: 'bold',
   margin: 15,
 },
  input_label:{
   color:"black",
   fontSize:15,
   fontWeight: 'bold',
   margin: 5,
  },
  
  input: {
     width:"100%",
     margin:8,
     padding:15,
     height:50,
     alignSelf:"center",
     borderColor: '#E1ECF7',
     borderWidth: 2,
     borderRadius:5,
     backgroundColor:"white",
  },
  ResetButton: {
   alignSelf:"center",  
   padding:15,
   width:"100%",
   
},
ResetButtonText:{
   color:"black",
   fontSize:12,
   fontWeight: 'bold',
   textAlign:"center"

},
  submitButton: {
     alignSelf:"center",  
     padding: 8,
     borderColor:"#216DDB",
     borderRadius:5,
     width:"100%",
     margin:15,
     height: 50,
     backgroundColor:'#216DDB',
     borderWidth:3
  },
  submitButtonText:{
     color: 'white',
     textAlign: 'center',
     fontSize:20,
     backgroundColor:'#216DDB'
  },
  login:{
    color:"black",
    textAlign: 'center',
    fontSize:40,
    fontWeight: 'bold',
    marginBottom:0,
  }
})