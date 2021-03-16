import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { styles, Black } from "./styles";
import Fonts from "../../styles/Fonts";

import Divider from "../../components/Divider";

const {
  labelStyle,
  inputTextStyle,
  categoryImageStyle,
  semitransparentViewStyle
} = styles;

class Search extends Component {
  keyExtractor = (item, index) => index.toString();

  renderCategoryCard = ({ item, index }) => {
    const cardMargin =
      index % 2 === 0
        ? { marginRight: 10, marginLeft: 5 }
        : { marginLeft: 10, marginRight: 5 };

    return (
      <TouchableHighlight underlayColor="transparent">
        <View
          style={[{ flexDirection: "column", marginVertical: 10 }, cardMargin]}
        >
          <ImageBackground source={item.imageURL} style={categoryImageStyle}>
            <View style={semitransparentViewStyle}>
              <Text style={labelStyle}>{item.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableHighlight>
    );
  };

  renderSeperator = () => <Divider />;

  renderCategories = () => {
    const { categoryList } = this.props;

    return (
      <View style={{ alignSelf: "center", flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categoryList}
          renderItem={this.renderCategoryCard}
          keyExtractor={this.keyExtractor}
          numColumns={2}
        />
      </View>
    );
  };

  renderSearchButton = () => {
    return (
      <View style={{ padding: 15, flexDirection: "row" }}>
        <MaterialIcons
          name="search"
          size={30}
          color={Black.tint50Percent}
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="Search..."
          style={inputTextStyle}
          maxLength={50}
          numberOfLines={1}
          underlineColorAndroid="transparent"
          //autoFocus
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.renderSearchButton()}
        <Divider />
        <Text
          style={{
            fontFamily: Fonts.LatoBold,
            fontSize: 16,
            margin: 15,
            color: Black.tint75Percent
          }}
        >
          Top Categories
        </Text>
        {this.renderCategories()}
      </SafeAreaView>
    );
  }
}

export default Search;
