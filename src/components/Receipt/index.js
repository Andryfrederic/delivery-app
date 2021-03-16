import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ComponentColors, Colors } from "../../styles/BrandColors";
import Fonts from "../../styles/Fonts";

import Divider from "../Divider";

const { TextColorDark } = ComponentColors;
const { White, Black } = Colors;

class Receipt extends Component {
  keyExtractor = (item, index) => index.toString();

  renderCard = ({ item }) => {
    const { name, price, count } = item;

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          paddingVertical: 25
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 3
          }}
        >
          <Text
            numberOfLines={3}
            style={[
              textStyle,
              {
                color: "green",
                marginRight: 15,
                flex: 0.1
              }
            ]}
          >
            {count}
          </Text>

          <Text numberOfLines={2} style={[textStyle, { flex: 0.9 }]}>
            {name}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "row",
            alignItems: "flex-start"
          }}
        >
          <Text style={textStyle}> {`₹ ${price}`}</Text>
        </View>
      </View>
    );
  };

  renderPromotionSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          padding: 15
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 3
          }}
        >
          <View style={{ marginRight: 15, flex: 0.1 }}>
            <MaterialCommunityIcons name="sale" size={25} color={"purple"} />
          </View>
          <View style={{ flex: 0.9, flexDirection: "column" }}>
            <Text
              numberOfLines={2}
              style={[textStyle, { fontFamily: Fonts.LatoBold }]}
            >
              Promotion applied
            </Text>
            <Text style={[textStyle, { marginTop: 5 }]}>You're saving 30%</Text>
            <Text style={[textStyle, { color: "green", marginTop: 5 }]}>
              Switch Promos
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1
          }}
        />
      </View>
    );
  };

  renderDivider = () => <Divider />;

  renderItemList = () => {
    const { selectedItems } = this.props;

    return (
      <View style={{ marginHorizontal: 15 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={selectedItems}
          renderItem={this.renderCard}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderDivider}
        />
      </View>
    );
  };

  renderTotalSection = () => {
    const { billingInfo, selectedItems } = this.props;
    const { discount, tax, deliveryFee } = billingInfo;
    const subtotal = selectedItems.reduce(
      (sum, { price, count }) => sum + price * count,
      0
    );

    return (
      <View style={{ padding: 15, flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5
          }}
        >
          <Text style={textStyle}>Subtotal</Text>
          <Text style={textStyle}>{`₹ ${subtotal}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5
          }}
        >
          <Text style={textStyle}>Promotion</Text>
          <Text style={textStyle}>{`₹ - ${discount}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5
          }}
        >
          <Text style={textStyle}>Tax</Text>
          <Text style={textStyle}>{`₹ ${tax}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5
          }}
        >
          <Text style={textStyle}>Delivery Fee</Text>
          <Text style={textStyle}>{`₹ ${deliveryFee}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5
          }}
        >
          <Text style={[textStyle, { fontFamily: Fonts.LatoBold }]}>Total</Text>
          <Text style={textStyle}>{`₹ ${subtotal -
            discount +
            tax +
            deliveryFee}`}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Divider />
        {this.renderItemList()}
        <Divider />
        {this.renderPromotionSection()}
        <Divider />
        {this.renderTotalSection()}
        <Divider />
      </View>
    );
  }
}

Receipt.propTypes = {
  selectedItems: PropTypes.array,
  billingInfo: PropTypes.object
};

Receipt.defaultProps = {
  selectedItems: [],
  billingInfo: {}
};

export default Receipt;

const styles = StyleSheet.create({
  textStyle: {
    color: Black.tint50Percent,
    fontFamily: Fonts.LatoRegular,
    fontSize: 18
  },
  containerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: White.tint50Percent,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5
  }
});

const { textStyle } = styles;
