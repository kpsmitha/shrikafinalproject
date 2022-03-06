import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {TabNavigator} from "./components/BottomTab";

export default class App extends React.Component{
  render(){
    return<AppContainer/>

  }
}

const SwitchNavigator=createSwitchNavigator({
  Home:{screen:HomeScreen},
  BottomTab:{screen:TabNavigator},
})

const AppContainer=createAppContainer(SwitchNavigator)


