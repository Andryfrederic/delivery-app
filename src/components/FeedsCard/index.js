import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text, Image } from "react-native";
import { Rating } from "react-native-elements";

import {
  styles,
  CardWidthVertical,
  CardHeightVertical,
  ImageCardWidthVertical,
  ImageCardHeightVertical
} from "./styles";

const {
  cardContainerStyle,
  imageCardStyle,
  cardContentStyle,
  titleTextStyle,
  tagTextStyle,
  timeTextStyle
} = styles;

const FeedsCard = ({
  onPress,
  imageURL,
  title,
  location,
  tag,
  time,
  rating,
  priceRange,
  horizontal
}) => {
  let combinedTag = "";
  tag.map(tag => {
    combinedTag = combinedTag + `  · ${tag}`;
  });

  const derivedCardContainerStyle = horizontal
    ? cardContainerStyle
    : [
        cardContainerStyle,
        { width: CardWidthVertical, height: CardHeightVertical }
      ];

  const derivedImageCardStyle = horizontal
    ? imageCardStyle
    : [
        imageCardStyle,
        {
          width: ImageCardWidthVertical,
          height: ImageCardHeightVertical,
          marginHorizontal: 0,
          alignSelf: "center"
        }
      ];

  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={derivedCardContainerStyle}>
        <Image
          style={derivedImageCardStyle}
          /*source={{
            uri: imageURL
          }}*/
          source={imageURL}
          resizeMode="cover"
        />
        <View style={cardContentStyle}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={titleTextStyle}
          >{`${title} - ${location}`}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={tagTextStyle}>
            {`${priceRange} ${combinedTag}`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
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
        </View>
      </View>
    </TouchableHighlight>
  );
};

FeedsCard.propTypes = {
  onPress: PropTypes.func,
  tag: PropTypes.array,
  //imageURL: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  priceRange: PropTypes.string,
  rating: PropTypes.number,
  horizontal: PropTypes.bool
};

FeedsCard.defaultProps = {
  rating: 0,
  onPress: null,
  //imageURL: "",
  title: "",
  location: "",
  tag: [],
  time: "",
  priceRange: "",
  horizontal: true
};

export default FeedsCard;
