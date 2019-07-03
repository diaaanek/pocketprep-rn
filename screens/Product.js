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

  // renderGallery() {
  //   const { product } = this.props;
  //   return (
  //     <FlatList
  //       horizontal
  //       pagingEnabled
  //       scrollEnabled
  //       showsHorizontalScrollIndicator={false}
  //       snapToAlignment="center"
  //       data={product.images}
  //       keyExtractor={(item, index) => `${index}`}
  //       renderItem={({ item }) => (
  //         <Image
  //           source={item}
  //           resizeMode="contain"
  //           style={{ width, height: height / 2.8 }}
  //         />
  //       )}
  //     />
  //   );
  // }

  render() {
    const { product } = this.props;

    return (
      <ScrollView scrollEnabled>
        <Block style={styles.product}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: this.props.navigation.getParam("imageSrc", "") }}
          />
          <Text h2 bold>
            {this.props.navigation.getParam("title", "no title")}
          </Text>

          {/* <Divider margin={[theme.sizes.padding * 0.9, 0]} /> */}

          <Block>
            <Text body semibold>
              Resources
            </Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {product.images.slice(1, 3).map((image, index) => (
                <Image
                  key={`gallery-${index}`}
                  source={image}
                  style={styles.image}
                />
              ))}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}
              >
                <Text gray>+{product.images.slice(3).length}</Text>
              </Block>
            </Block>
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
