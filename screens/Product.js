import React, { Component } from "react";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons";

import Autolink from "react-native-autolink";
import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    };
  };

  render() {
    const { product } = this.props;

    return (
      <ScrollView scrollEnabled>
        <Block style={styles.product}>
          <Text primary h2 bold>
            {this.props.navigation.getParam("title", "no title")}
          </Text>

          <Divider margin={[theme.sizes.padding * 0.9, 0]} />

          <Block>
            <Text body semibold>
              {this.props.navigation.getParam("answer1", "no title")}
            </Text>

            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              <Text body semibold>
                {this.props.navigation.getParam("answer2", "no title")}
              </Text>
            </Block>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text body center white>
                Resources
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[0]
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  }
});
