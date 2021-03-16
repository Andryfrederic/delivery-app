import React, { Fragment, Component } from "react";
import { View, FlatList, Text } from "react-native";

import { styles } from "./styles";

import CurrentOrderCard from "../../components/CurrentOrderCard";

const CurrentOrderList = [
  {
    name: "1",
    title: "Spicella Spanish Kitchen",
    location: "Qranbu",
    imageURL: require("../../../assets/images/image_1.png"),
    rating: 2,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"],
    orderId: "#46767",
    time: "8:30 PM",
    totalBillAmount: 850,
    status: "Preparing your order"
  }
];

class CurrentOrder extends Component {
  keyExtractor = (item, index) => index.toString();

  renderOrderItem = ({ item }) => {
    const {
      imageURL,
      title,
      location,
      time,
      orderId,
      totalBillAmount,
      status
    } = item;
    const { onPressTrackOrder } = this.props;

    return (
      <CurrentOrderCard
        imageURL={imageURL}
        title={title}
        time={time}
        location={location}
        onPressTrackOrder={onPressTrackOrder}
        orderId={orderId}
        totalBillAmount={totalBillAmount}
        status={status}
      />
    );
  };

  renderOrderList = () => {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CurrentOrderList}
          renderItem={this.renderOrderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  };

  render() {
    return <Fragment>{this.renderOrderList()}</Fragment>;
  }
}

export default CurrentOrder;
