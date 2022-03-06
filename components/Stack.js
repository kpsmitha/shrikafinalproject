import * as React from "react";
import {Text, View, StyleSheet} from "react-native";
import RedDayScreen from "../screens/RedDayScreen";
import WhiteDayScreen from "../screens/WhiteDayScreen";
import {createStackNavigator} from "react-navigation-stack";
import StackScreen from "../screens/StackScreen";
import SpanishScreen from "../screens/Spanish";
import EnglishScreen from "../screens/English";
import TrigScreen from "../screens/Trig";
import PhysicsScreen from "../screens/Physics";
import EngScreen from "../screens/Eng";
import AphgScreen from "../screens/Aphg";
import StudyScreen from "../screens/Study";

export const StackNavigator=
createStackNavigator({
  create:{
    screen:RedDayScreen,
    navigationOptions:{
      headerShown:false,
    },
  },

  stack:{ 
    screen:StackScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
     spanish:{
    screen:SpanishScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
     english:{
    screen:EnglishScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
      trig:{
    screen:TrigScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
      physics:{
    screen:PhysicsScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
      eng:{
    screen:EngScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
    aphg:{
    screen:AphgScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
      study:{
    screen:StudyScreen,
    navigationOptions:{
      headerShown:false,
    },
    },
initialRouteName:"create",

})