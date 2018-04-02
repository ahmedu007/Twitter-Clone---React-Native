import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { Constants } from "expo";

const TitleBar = props => {
  return (
    <View style={TitleBarStyles.titleBar}>
      <Image source={{ uri: props.img }} style={TitleBarStyles.img} />
      <Text style={TitleBarStyles.text}>{props.title}</Text>
    </View>
  );
};

const TitleBarStyles = StyleSheet.create({
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight,
    height: 80,
    justifyContent: "flex-start",
    backgroundColor: "#00aced",
    elevation: 4
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  text: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});

export default TitleBar;
