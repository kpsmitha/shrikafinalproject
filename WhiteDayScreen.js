import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class WhiteDayScreen extends Component {
    render() {
        return (
          < View style={{flex:1, backgroundColor:"red"}}>
          <View style={styles.textContainer}>
          <Text style={styles.titleText}>White Day Classes</Text>
           </View>

           <View style={styles.buttonContainer}>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('physics')}}style={styles.button}>
           <Text style={styles.buttonText}> 1st: MST Physics </Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('eng')}} style={styles.button}>
           <Text style={styles.buttonText}> 2nd: Engineering 1 </Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('aphg')}}style={styles.button}>
           <Text style={styles.buttonText}> 3rd: AP Human Geography </Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('study')}}style={styles.button}>
           <Text style={styles.buttonText}> 4th: Study Skills </Text>
           </TouchableOpacity>
          </View>

          </View>
         

           
         

            
        )
    }
}

const styles=StyleSheet.create({
  textContainer:{
    backgroundColor:"white"
  },
  titleText:{
    textAlign:"center",
    color:"red",
    fontSize:20,
    fontWeight:"bold",
    padding:20
    
  },
  buttonContainer:{
    background:"red",
    alignSelf:"center",
    marginTop:20
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    borderWidth:3,
    borderColor:"white",
    margin:10,
    width:250,
    height:35

  },
  buttonText:{
fontSize:15,
fontWeight: "bold"
  }

})