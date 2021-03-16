import React, { Fragment, Component } from "react";
import { View, FlatList, Text } from "react-native";

import { styles } from "./styles";

import HistoryCard from "../../components/HistoryCard";

const OrderHistoryData = [
  {
    name: "1",
    title: "Spicella Spanish Kitchen",
    location: "Qranbu",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_1.png"),
    rating: 2,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"],
    date: "24 Dec 2019 at 5:30 PM",
    orderId: "#2D5780",
    deliveredBy: "Delivered by Solomon Pearce",
    totalBillAmount: 260
  },
  {
    name: "2",
    title: "Sweet Escape",
    location: "Aplence",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_2.png"),
    rating: 4.5,
    priceRange: "₹₹",
    tag: ["Ice Cream", "Desserts"],
    date: "25 Dec 2019 at 5:00 PM",
    orderId: "#2D5781",
    deliveredBy: "Delivered by Solomon Pearce",
    totalBillAmount: 300
  },
  {
    name: "3",
    title: "Paterro’s Kitchen",
    location: "Trivale",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_3.png"),
    rating: 3,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"],
    date: "26 Dec 2019 at 2:30 PM",
    orderId: "#2D5782",
    deliveredBy: "Delivered by Kaif Knox",
    totalBillAmount: 100
  },
  {
    name: "4",
    title: "Grassfed Grill",
    location: "Ensdon",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_4.png"),
    rating: 3.5,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"],
    date: "28 Dec 2019 at 1:30 PM",
    orderId: "#2D5783",
    deliveredBy: "Delivered by Mcauley Harvey",
    totalBillAmount: 120
  },
  {
    name: "5",
    title: "Xin Chao Vietnamese Restaurant",
    location: "Iwimond",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_5.png"),
    rating: 1,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"],
    date: "29 Dec 2019 at 9:30 AM",
    orderId: "#2D5784",
    deliveredBy: "Delivered by Sahib Dotson",
    totalBillAmount: 290
  },
  {
    name: "6",
    title: "Burger King",
    location: "Antavale",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_6.png"),
    rating: 5,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"],
    date: "29 Dec 2019 at 10:30 AM",
    orderId: "#2D5785",
    deliveredBy: "Theon Copeland",
    totalBillAmount: 450
  }
];

class History extends Component {
  keyExtractor = (item, index) => index.toString();

  renderOrderItem = ({ item }) => {
    const {
      imageURL,
      title,
      time,
      rating,
      tag,
      location,
      priceRange,
      date,
      orderId,
      deliveredBy,
      totalBillAmount
    } = item;

    return (
      <HistoryCard
        imageURL={imageURL}
        title={title}
        time={time}
        rating={rating}
        tag={tag}
        location={location}
        priceRange={priceRange}
        date={date}
        orderId={orderId}
        deliveredBy={deliveredBy}
        totalBillAmount={totalBillAmount}
      />
    );
  };

  renderOrderList = () => {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={OrderHistoryData}
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

export default History;
