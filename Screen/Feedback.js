import * as React from 'react';
import { View, Text,TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Textarea from 'react-native-textarea';
var radio_props = [
   {label: 'Very Satisfied', value: 0 },
   {label: 'Neither Satisfied or dissatisfied', value: 1 },
   {label: 'Dissatisfied', value: 2 },
   {label: 'Very Dissatisfied', value: 3 }
 ];

export default function Login(props) {
   
  return (
    <View style = {styles.container}>
            <Text  style = {styles.login}>Overall, how did you feel about the service?</Text>
            
            <View style={{flex: 1, marginHorizontal:50}}>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  borderWidth={1}
                  buttonSize={17}
                  labelStyle={{fontSize: 14, color: 'black',}}
                  buttonInnerColor={'#AFB7C8'}
                  buttonColor={'#AFB7C8'}
                  />
               
               
               
               <Text style = {styles.input_label}>How Could we Imporve our Service?</Text>
               <Textarea
                  containerStyle={styles.textareaContainer}
                  style={styles.textarea}
                  maxLength={1200}
                  backgroundColor={'white'}
                  // placeholderTextColor={'white'}
                  // borderColor={'red'}
               //   underlineColorAndroid={'transparent'}
               />
               
               
               <Text style = {styles.paragrapg}>Character limit 1200</Text>
               <Text style={styles.paragrapg_1}>Please don't include any financial information for example your credit card number</Text>
               

               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => props.navigation.navigate("MoreOptions")
                  }>
                  <Text style = {styles.submitButtonText}>GIVE FEEDBACK</Text>
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

  textareaContainer: {
   height: 150,
   padding: 5,
   backgroundColor: 'white',
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
   marginTop: 50,
   marginBottom:10
  },
  paragrapg:{
   color:"gray",
   fontSize:14,
   //fontWeight: 'bold',
   marginTop: 10,
  },
  paragrapg_1:{
   color:"gray",
   fontSize:14,
   //fontWeight: 'bold',
   marginTop: 30,
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
   textAlign: 'left',
   fontSize:16,
   fontWeight: 'bold',
   marginLeft: 50,
   marginBottom:20
  }
})