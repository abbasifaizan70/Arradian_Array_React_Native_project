import React,  { useState } from 'react'
import { View, Text,TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { block } from 'react-native-reanimated';


export default function Login(props) {
   
  return (
    <View style = {styles.container}>
            <Text  style = {styles.login}> Sign in</Text>
            
            <View style={{flex: 1, marginHorizontal:50}}>
               <Text style = {styles.input_label}>Email Address</Text>
               <TextInput style = {styles.input}
                  placeholder = "Your Email Address "
                  placeholderTextColor = "#8f9da9"
                  />
               <Text style = {styles.input_label}>Password</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "*****"
                  placeholderTextColor = "#8f9da9"
                  />
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("Feedback")
                  }>
                  <Text style = {styles.submitButtonText}> LOGIN</Text>
               </TouchableOpacity>

               <View style={styles.checkboxContainer}>
               <CheckBox
                  value={false}
                  onValueChange={true}
                  style={styles.checkbox}
               />
               <Text style={styles.label}>Remember Login Info </Text>
               </View>


               <TouchableOpacity
                  style = {styles.ResetButton}
                  onPress = {
                     () => props.navigation.navigate("Home")
                  }>
                  <Text style = {styles.ResetButtonText}> Reset Password</Text>
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
   fontSize:16,
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
     margin:15,
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
   fontSize:18,
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
    marginBottom:40,
  }
})