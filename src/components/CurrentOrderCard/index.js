import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text, Image } from "react-native";

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

const CurrentOrderCard = ({
  onPress,
  imageURL,
  title,
  location,
  orderId,
  time,
  totalBillAmount,
  status,
  onPressTrackOrder
}) => {
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
          <Text style={titleTextStyle}>{status}</Text>
          <Text style={timeTextStyle}>{orderId}</Text>
          <Text style={[timeTextStyle, { marginBottom: 10 }]}>
            {`Estimated arrival at ${time}`}
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
                label="TRACK"
                onPress={onPressTrackOrder}
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

CurrentOrderCard.propTypes = {
  onPressTrackOrder: PropTypes.func,
  //imageURL: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  orderId: PropTypes.string,
  status: PropTypes.string,
  totalBillAmount: PropTypes.number
};

CurrentOrderCard.defaultProps = {
  onPress: null,
  //imageURL: "",
  title: "",
  location: "",
  time: "",
  orderId: "",
  status: "",
  totalBillAmount: 0
};

export default CurrentOrderCard;
