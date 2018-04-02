import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  View,
  Image
} from "react-native";

import auth from "../twitterConfig";
import Axios from "axios";
import Tweet from "../components/Tweet";

export default class App extends React.Component {
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
