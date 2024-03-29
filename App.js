import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading, Asset } from "expo";
import { Font } from "expo";
import Navigation from "./navigation";
import { Block } from "./components";

// import all used images
const images = [
  require("./assets/icons/back.png"),
  require("./assets/icons/javascript.png"),
  require("./assets/icons/browser.png"),
  require("./assets/icons/html.png"),
  require("./assets/icons/archive.png"),
  require("./assets/icons/algorithm.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/illustration_1.png"),
  require("./assets/images/illustration_2.png"),
  require("./assets/images/illustration_3.png"),
  require("./assets/images/avatar.png")
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontsLoaded: false
  };

  loadFonts() {
    return Font.loadAsync({
      "Circular-Reg": require("./assets/fonts/circular-book.ttf"),
      "Circular-Medium": require("./assets/fonts/circular-medium.ttf"),
      "Circular-Bold": require("./assets/fonts/circular-bold.ttf")
    });
  }

  // async componentDidMount() {
  //   await this.loadFonts();
  //   this.setState({ fontsLoaded: true });
  // }

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    await this.loadFonts();
    this.setState({ fontsLoaded: true });

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() =>
            this.setState({
              isLoadingComplete: true
            })
          }
        />
      );
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
