import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text, Image } from "react-native";
import { Rating } from "react-native-elements";

import { styles, Black, White, Green } from "./styles";

import Divider from "../Divider";
import Button from "../Button";

const {
  cardContainerStyle,
  imageCardStyle,
  cardContentStyle,
  titleTextStyle,
  timeTextStyle,
  amountTextStyle
} = styles;

const HistoryCard = ({
  onPress,
  imageURL,
  title,
  location,
  tag,
  orderId,
  rating,
  date,
  deliveredBy,
  totalBillAmount
}) => {
  let combinedTag = "";
  tag.map(tag => {
    combinedTag = combinedTag + `  · ${tag}`;
  });

  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={cardContainerStyle}>
        <Image
          style={imageCardStyle}
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
          <Text style={titleTextStyle}>Order Completed</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={timeTextStyle}>{date}</Text>
            <Rating
              type="custom"
              imageSize={20}
              readonly
              startingValue={rating}
              style={{ marginLeft: 10 }}
            />
          </View>
          <Text style={timeTextStyle}>{orderId}</Text>
          <Text style={[timeTextStyle, { marginBottom: 10 }]}>
            {deliveredBy}
          </Text>
          <Divider />
          <View
            style={{
              flexDirection: "row",
              marginTop: 15
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: 5,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={amountTextStyle}
              >{`Total: ₹ ${totalBillAmount}`}</Text>
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Button
                label="RE-ORDER"
                containerStyle={{
                  backgroundColor: Green.core,
                  borderRadius: 5
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <View style={{ flex: 1, marginRight: 5 }}>
              <Button
                label="View receipt"
                containerStyle={{ backgroundColor: White.tint75Percent }}
                textStyle={{ color: Black.tint75Percent }}
              />
            </View>

            <View style={{ flex: 1, marginLeft: 5 }}>
              <Button
                label="Get help"
                containerStyle={{ backgroundColor: White.tint75Percent }}
                textStyle={{ color: Black.tint75Percent }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

HistoryCard.propTypes = {
  onPress: PropTypes.func,
  tag: PropTypes.array,
  //imageURL: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  orderId: PropTypes.string,
  deliveredBy: PropTypes.string,
  rating: PropTypes.number,
  totalBillAmount: PropTypes.number
};

HistoryCard.defaultProps = {
  rating: 0,
  onPress: null,
  //imageURL: "",
  title: "",
  location: "",
  tag: [],
  date: "",
  orderId: "",
  deliveredBy: "",
  totalBillAmount: 0
};

export default HistoryCard;
