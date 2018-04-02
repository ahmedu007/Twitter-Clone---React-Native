import React, { Component } from "react";
import { View, Text } from "react-native";
import TitleBar from "../components/Titlebar";

class Notifications extends Component {
  static navigationOptions = {
    title: "Notifications",
    headerStyle: {
      backgroundColor: "#00aced"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <TitleBar
          img={
            "https://pbs.twimg.com/profile_images/963147642938171392/Dr3MU3Ci_normal.jpg"
          }
          title="Notifications"
        />
        <Text>Hello Notifications Screen</Text>
      </View>
    );
  }
}

export default Notifications;
