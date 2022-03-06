import * as React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import RedDayScreen from "../screens/RedDayScreen";
import WhiteDayScreen from "../screens/WhiteDayScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {StackNavigator} from "./Stack";



export const TabNavigator=createBottomTabNavigator({
  RedDayScreen:{screen:StackNavigator},
  WhiteDayScreen:{screen:WhiteDayScreen},
  
},
{
  defaultNavigationOptions:(
    {navigation})=>({
      tabBarIcon:()=>{
        const routeName=navigation.state.routeName;
        console.log(routeName);
        if (routeName==="RedDayScreen"){
          return(
            <Image 
            source={require("../assets/red.png")}
            style={{width:30, height:30}}
            />
          )
        }
        else if (routeName==="WhiteDayScreen"){
          return(
            <Image
            source={require("../assets/white.png")}
            style={{width:30, height:30}}
            />
          )
        }
      }
    })
  
}
)


