import React, { Component } from "react";
import { View, Text } from "react-native";
import TitleBar from "../components/Titlebar";

class Messages extends Component {
  static navigationOptions = {
    title: "Messages",
    header: null
  };
  render() {
    return (
      <View>
        <TitleBar
          img={
            "https://pbs.twimg.com/profile_images/963147642938171392/Dr3MU3Ci_normal.jpg"
          }
          title="Messages"
        />
        <Text>Hello Messages Screen</Text>
      </View>
    );
  }
}

export default Messages;
