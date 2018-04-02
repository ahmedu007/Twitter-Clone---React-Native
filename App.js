import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    paddingTop: Constants.statusBarHeight
  }
});

export default class App extends Component {
  render() {
    return (
      <Navigator style={{ width: Dimensions.get("window").width }} />
      // <View style={styles.container}>
      // </View>
    );
  }
}

// export default TabNavigator(
//   {
//     Home: { screen: App },
//     Search: { screen: Search },
//     Notifications: { screen: Notifications },
//     Messages: { screen: Messages }
//   },
//     {
//       navigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) => {
//           const { routeName } = navigation.state;
//           let iconName;
//           if (routeName === "Home") {
//             iconName = `ios-information-circle${focused ? "" : "-outline"}`;
//           } else if (routeName === "Settings") {
//             iconName = `ios-options${focused ? "" : "-outline"}`;
//           }

//           // You can return any component that you like here! We usually use an
//           // icon component from react-native-vector-icons
//           return <Ionicons name={iconName} size={25} color={tintColor} />;
//         }
//       }),
//       tabBarOptions: {
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray"
//       },
//       tabBarComponent: TabBarBottom,
//       tabBarPosition: "bottom",
//       animationEnabled: false,
//       swipeEnabled: false
//     }
// );
