import * as React from 'react';
import { View,StyleSheet,Text,state } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { render } from 'react-dom';



export default function Login(props) {
   
  return (


    <View style = {styles.container}>
      <Text  style = {styles.moreoptions}> More Options</Text>
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="My Profile"
      />   
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="Resource File"
      />
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="FAQ"
      />   
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="Give Feedback"
      />   
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="Contact Us"
      />
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="About Us"
      />   
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="Privacy and Policy"
      />   
      <DropDownPicker
         items={[{label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />}, ]}
         style = {styles.DropDownPicker}
         placeholder="Log Out"
      />

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

  DropDownPicker:{
   backgroundColor: '#fafafa',
   marginLeft:'5%',
   width:'90%',
   marginTop:15,
   justifyContent: 'flex-start',
  },
  moreoptions:{
   color:"black",
   textAlign: 'left',
   fontSize:20,
   fontWeight: 'bold',
   marginLeft:'5%',
   height:50,
   paddingLeft:'5%',
   paddingTop:10,
   width:'90%',
   backgroundColor:"white"
 }
})