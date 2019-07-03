import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons";
import { LinearGradient } from "expo";

import { Button, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Explore extends Component {
  state = {
    loading: true,
    countries: [
      {
        name: "What is a closure?",
        imageSrc: "https://"
      },
      {
        name: "What is JSX?",
        imageSrc: "https://"
      },
      {
        name: "What is the difference between == and === ?",
        imageSrc: "https://"
      }
    ]
  };

  handleSearchFocus(status) {
    Animated.timing(this.state.searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150 // ms
    }).start();
  }

  handleListTap = item => {
    console.log(item.name);
    this.props.navigation.navigate("Product", {
      title: item.data.title,
      imageSrc: item.data.preview.images[0].source.url
    });
  };

  componentWillMount() {
    fetch("https://reddit.com/r/aww.json?raw_json=1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          posts: data.data.children
        });
      });
  }

  render() {
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Javascript
          </Text>
        </Block>
        {this.state.loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <FlatList
          keyExtractor={item => item.name}
          data={this.state.posts}
          keyExtractor={item => item.data.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleListTap(item)}>
              <Text
                body
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 25,
                  padding: 25,
                  backgroundColor: "#f9fafb",
                  shadowColor: theme.colors.black,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 13,
                  elevation: 2
                }}
              >
                {item.data.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Block>
    );
  }
}

Explore.defaultProps = {
  images: mocks.explore
};

export default Explore;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: "rgba(142, 142, 147, 0.06)",
    borderColor: "rgba(142, 142, 147, 0.06)",
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent"
  },
  searchIcon: {
    position: "absolute",
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6
  },
  explore: {
    marginHorizontal: theme.sizes.padding * 1.25
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - theme.sizes.padding * 2.5,
    marginBottom: theme.sizes.base,
    borderRadius: 4
  },
  mainImage: {
    minWidth: width - theme.sizes.padding * 2.5,
    minHeight: width - theme.sizes.padding * 2.5
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.1,
    width,
    paddingBottom: theme.sizes.base * 4
  }
});
