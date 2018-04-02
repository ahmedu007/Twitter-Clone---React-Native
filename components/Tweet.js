import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  View,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    borderStyle: "solid",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10
    // paddingLeft: 20
  },

  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100
  },

  tweets: {
    flex: 1,
    textAlign: "left",
    fontSize: 17,
    paddingLeft: 10
  },

  icons: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    marginTop: 10
  }
});

const Tweet = props => {
  return (
    <View style={localStyles.container}>
      <View style={localStyles.horizontalContainer}>
        <Image style={localStyles.avatar} source={{ uri: props.img }} />
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-around",
            marginLeft: 5
          }}
        >
          <Text style={localStyles.tweets}>
            {props.name} @{props.handle}
          </Text>
          <Text style={localStyles.tweets}>{props.text}</Text>
        </View>
      </View>
      <View style={localStyles.icons}>
        <Icon name="comment" size={25} color="#900" />
        <Icon name="retweet" size={25} color="#900" />
        <Icon name="heart" size={25} color="#900" />
        <Icon name="share-google" size={25} color="#900" />
      </View>
    </View>
  );
};

export default Tweet;
