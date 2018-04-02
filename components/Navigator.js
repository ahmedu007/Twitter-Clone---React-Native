import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TabNavigator, TabBarBottom, StackNavigator } from "react-navigation";
import App from "../App";
import Search from "./screens/Search";
import Notifications from "./screens/Notifications";
import Messages from "./screens/Messages";

// export const Navigator = StackNavigator(
//   {
//     Home: {
//       screen: App
//     }
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

export default TabNavigator(
  {
    Home: { screen: App },
    Search: { screen: Search },
    Notifications: { screen: Notifications },
    Messages: { screen: Messages }
  }
  //   {
  //     navigationOptions: ({ navigation }) => ({
  //       tabBarIcon: ({ focused, tintColor }) => {
  //         const { routeName } = navigation.state;
  //         let iconName;
  //         if (routeName === "Home") {
  //           iconName = `ios-information-circle${focused ? "" : "-outline"}`;
  //         } else if (routeName === "Settings") {
  //           iconName = `ios-options${focused ? "" : "-outline"}`;
  //         }

  //         // You can return any component that you like here! We usually use an
  //         // icon component from react-native-vector-icons
  //         return <Ionicons name={iconName} size={25} color={tintColor} />;
  //       }
  //     }),
  //     tabBarOptions: {
  //       activeTintColor: "tomato",
  //       inactiveTintColor: "gray"
  //     },
  //     tabBarComponent: TabBarBottom,
  //     tabBarPosition: "bottom",
  //     animationEnabled: false,
  //     swipeEnabled: false
  //   }
);
