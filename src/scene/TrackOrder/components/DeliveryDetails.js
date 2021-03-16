import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";

import Divider from "../../../components/Divider";

import Fonts from "../../../styles/Fonts";
import { Colors, ComponentColors } from "../../../styles/BrandColors";

const { Black, White, Green } = Colors;

const DeliveryDetails = ({ deliveryDetails }) => {
  const {
    address,
    billAmount,
    restaurant,
    note,
    vehicleId,
    status,
    imageURL
  } = deliveryDetails;

  return (
    <Fragment>
      <View
        style={{
          backgroundColor: White.tint75Percent,
          flex: 1,
          borderTopColor: ComponentColors.Divider,
          borderTopWidth: 1
        }}
      >
        <View
          style={{
            backgroundColor: White.core,
            flexDirection: "column",
            marginBottom: 10,
            padding: 15,
            justifyContent: "center"
          }}
        >
          <Text style={titleTextStyle}>Delivery details</Text>
          <Text style={lightDarkTextStyle}>Address</Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={darkTextStyle}>
            {address}
          </Text>
          <Divider />
          <Text style={lightDarkTextStyle}>Type</Text>
          <Text style={darkTextStyle}>{note}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            marginBottom: 10,
            padding: 15,
            justifyContent: "center"
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={[darkTextStyle, { marginBottom: 5 }]}>{status}</Text>
              <Text style={[titleTextStyle, { marginVertical: 0 }]}>
                {vehicleId}
              </Text>
            </View>
            <Avatar
              rounded
              source={{
                uri: imageURL
              }}
              size="large"
            />
          </View>
          <Icon
            name="phone"
            type="material"
            color={Black.tint75Percent}
            size={35}
            iconStyle={{ alignSelf: "flex-start", marginVertical: 15 }}
            //onPress={onPressClose}
          />
        </View>
        <View
          style={{
            backgroundColor: White.core,
            flexDirection: "column",
            marginBottom: 10,
            padding: 15,
            justifyContent: "center"
          }}
        >
          <Text style={[titleTextStyle, { marginVertical: 10 }]}>
            Order Summary
          </Text>
          <View
            style={{
              marginVertical: 15,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={[lightDarkTextStyle, { marginTop: 0 }]}>
              {restaurant}
            </Text>
            <Text
              style={[lightDarkTextStyle, { marginTop: 0, color: Green.core }]}
            >
              View receipt
            </Text>
          </View>
          <Divider />
          <View
            style={{
              marginVertical: 15,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={titleTextStyle}>Total</Text>
            <Text style={darkTextStyle}>{`₹ ${billAmount}`} </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default DeliveryDetails;

DeliveryDetails.propTypes = {
  address: PropTypes.string,
  restaurant: PropTypes.string,
  note: PropTypes.string,
  status: PropTypes.string,
  vehicleId: PropTypes.string,
  billAmount: PropTypes.number,
  imageURL: PropTypes.string
};

DeliveryDetails.defaultProps = {
  address: "",
  restaurant: "",
  note: "",
  status: "",
  vehicleId: "",
  imageURL: "",
  billAmount: 0
};

export const styles = StyleSheet.create({
  titleTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 20,
    color: ComponentColors.TextColorDark,
    marginVertical: 5
  },
  lightDarkTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 18,
    color: Black.tint50Percent,
    marginTop: 15
  },
  darkTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 18,
    color: ComponentColors.TextColorDark,
    marginTop: 5,
    marginBottom: 15
  }
});

const { titleTextStyle, darkTextStyle, lightDarkTextStyle } = styles;
