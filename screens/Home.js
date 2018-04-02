import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  View,
  Image
} from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Header } from "react-navigation";

import TitleBar from "../components/Titlebar";

import auth from "../twitterConfig";
import Axios from "axios";
import Tweet from "../components/Tweet";

import Search from "./Search";
import Notifications from "./Notifications";
import Messages from "./Messages";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    header: null
    // headerStyle: {
    //   backgroundColor: "#00aced"
    // },
    // headerTintColor: "#fff",
    // headerTitleStyle: {
    //   fontWeight: "bold"
    // }
  };

  state = {
    tweets: []
  };

  componentDidMount() {
    this.getTweets();
  }

  getTweets() {
    return Axios.get(
      // "https://northcoders-sprints-api.now.sh/api/twitter/timeline"
      "https://northcoders-sprints-api.now.sh/api/twitter/tweets/CuriousMau"
    )
      .then((res, index) => {
        return this.setState({
          tweets: res.data.tweets
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <TitleBar
          img={
            "https://pbs.twimg.com/profile_images/963147642938171392/Dr3MU3Ci_normal.jpg"
          }
          title="Home"
        />
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={this.state.tweets}
              renderItem={({ item }) => (
                <Tweet
                  img={item.user.profile_image_url_https}
                  text={item.text}
                  name={item.user.name}
                  handle={item.user.screen_name}
                />
              )}
              keyExtractor={(item, index) => item._id}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff"
  }
});

const HomeTabNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Search },
    Notifications: { screen: Notifications },
    Messages: { screen: Messages }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Notifications") {
          iconName = `ios-notifications${focused ? "" : "-outline"}`;
        } else if (routeName === "Messages") {
          iconName = `ios-mail${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#00aced",
      inactiveTintColor: "grey"
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false
    // swipeEnabled: false
  }
);

export default HomeTabNavigator;
