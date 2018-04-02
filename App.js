import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";
import { Constants } from "expo";

import Home from "./screens/Home";
import Search from "./screens/Search";
import Notifications from "./screens/Notifications";
import Messages from "./screens/Messages";

const Navigator = StackNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  Notifications: { screen: Notifications },
  Messages: { screen: Messages }
});

export default class App extends Component {
  render() {
    return <Navigator style={{ width: Dimensions.get("window").width }} />;
  }
}
