import React, { Fragment, Component } from "react";
import { Text, View, Image, FlatList, ScrollView } from "react-native";
import { Rating } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import Divider from "../../components/Divider";

import { styles } from "./styles";
const {
  imageViewStyle,
  titleTextStyle,
  tagTextStyle,
  timeTextStyle,
  priceTextStyle,
  listItemTextStyle
} = styles;

class Restaurant extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <View>
          <Image
            style={{ height: 80, width: 80, marginRight: 5 }}
            /*source={{
            uri: imageURL
          }}*/
            source={item.imageURL}
            resizeMode="cover"
          />
        </View>
        <View
          style={{ flexDirection: "column", justifyContent: "center", flex: 2 }}
        >
          <Text style={listItemTextStyle}>{item.name}</Text>
          <Text style={priceTextStyle}>{`₹ ${item.price}`}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <EvilIcons
            name="minus"
            size={30}
            color="#808080"
            style={{ paddingHorizontal: 5 }}
          />
          <Text style={listItemTextStyle}>1</Text>
          <EvilIcons
            name="plus"
            size={30}
            color="#808080"
            style={{ paddingHorizontal: 5 }}
          />
        </View>
      </View>
    );
  };

  renderHeader = label => {
    return (
      <Text
        style={[
          titleTextStyle,
          {
            marginTop: 0,
            paddingVertical: 10,
            backgroundColor: "#f7f7f7"
          }
        ]}
      >
        {label}
      </Text>
    );
  };

  renderSeperator = () => <Divider />;

  render() {
    const {
      id,
      restaurantName,
      title,
      location,
      time,
      imageURL,
      rating,
      tag
    } = this.props.selectedItem;
    const { menuItems } = this.props;

    let combinedTag = "";
    tag.map((tag, index) => {
      combinedTag = combinedTag + (index === 0 ? `· ${tag}` : `  · ${tag}`);
    });

    return (
      <Fragment>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={imageViewStyle}
            /*source={{
            uri: imageURL
          }}*/
            source={imageURL}
            resizeMode="cover"
          />
          <View style={{ flexDirection: "column", padding: 15 }}>
            <Text style={titleTextStyle}>{`${title} - ${location}`}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={tagTextStyle}>
              {combinedTag}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10
              }}
            >
              <Text style={timeTextStyle}>{time}</Text>
              <Rating
                type="custom"
                imageSize={20}
                readonly
                startingValue={rating}
                //ratingColor={"#141414"}
                style={{ marginLeft: 10 }}
              />
            </View>
            <Divider />
            {menuItems.map((category, index) => {
              return (
                <FlatList
                  key={index}
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  data={category.items}
                  renderItem={this.renderItem}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={this.renderSeperator}
                  ListHeaderComponent={() => this.renderHeader(category.title)}
                />
              );
            })}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

export default Restaurant;
