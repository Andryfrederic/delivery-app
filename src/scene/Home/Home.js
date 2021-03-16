import React, { Fragment } from "react";
import { ScrollView, View, FlatList, Image } from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-navigation";

import { styles, White } from "./styles";

import FilterButton from "../../components/FilterButton";
import Divider from "../../components/Divider";
import ListView from "./ListView";
import Filter from "./Filter";

const { imageSwiperStyle } = styles;

import { FilterType } from "./Filter";

const Filters = [
  {
    label: "Filter",
    key: null,
    iconName: "tune",
    showLabel: false
  },
  FilterType.Dietary,
  FilterType.Price,
  FilterType.MaxDeliveryFee,
  FilterType.Sort
];

const FavListData = [
  {
    id: 2212,
    name: "1",
    restaurantName: "1",
    title: "Spicella Spanish Kitchen",
    location: "Qranbu",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_1.png"),
    rating: 2,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"]
  },
  {
    id: 2213,
    name: "2",
    restaurantName: "1",
    title: "Sweet Escape",
    location: "Aplence",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_2.png"),
    rating: 4.5,
    priceRange: "₹₹",
    tag: ["Ice Cream", "Desserts"]
  },
  {
    id: 2214,
    name: "3",
    restaurantName: "1",
    title: "Paterro’s Kitchen",
    location: "Trivale",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_3.png"),
    rating: 3,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"]
  },
  {
    id: 2215,
    name: "4",
    restaurantName: "1",
    title: "Grassfed Grill",
    location: "Ensdon",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_4.png"),
    rating: 3.5,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"]
  },
  {
    id: 2216,
    name: "5",
    restaurantName: "1",
    title: "Xin Chao Vietnamese Restaurant",
    location: "Iwimond",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_5.png"),
    rating: 1,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"]
  },
  {
    id: 2217,
    name: "6",
    restaurantName: "1",
    title: "Burger King",
    location: "Antavale",
    time: "30-40 min",
    imageURL: require("../../../assets/images/image_6.png"),
    rating: 5,
    priceRange: "₹₹",
    tag: ["Italian", "Chinese", "American"]
  }
];

class Home extends React.Component {
  renderSwiper = () => (
    <View style={imageSwiperStyle}>
      <Swiper autoplay activeDotColor={"#FFFFFF"}>
        <Image
          source={require("../../../assets/images/image_3.png")}
          style={imageSwiperStyle}
        />
        <Image
          /*source={{
            uri: "",
            cache: "force-cache"
          }}*/
          source={require("../../../assets/images/image_6.png")}
          style={imageSwiperStyle}
        />
        <Image
          /*source={{
            uri: "",
            cache: "force-cache"
          }}*/
          source={require("../../../assets/images/image_5.png")}
          style={imageSwiperStyle}
        />
      </Swiper>
    </View>
  );

  keyExtractor = (item, index) => index.toString();

  renderFilterItem = ({ item }) => {
    const { label, iconName, showLabel } = item;
    const { onPressFilter } = this.props;

    return (
      <FilterButton
        label={label}
        iconName={iconName}
        showLabel={showLabel}
        containerStyle={{ margin: 8 }}
        onPress={() => onPressFilter(item.key)}
      />
    );
  };

  renderFilterList = () => {
    return (
      <View style={{ backgroundColor: White.core }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Filters}
          renderItem={this.renderFilterItem}
          keyExtractor={this.keyExtractor}
          horizontal
        />
      </View>
    );
  };

  render() {
    const ds = [...FavListData];
    const {
      showFilter,
      onPressFilter,
      onSelectFilter,
      filter,
      onPressCard
    } = this.props;

    return (
      <SafeAreaView style={{ backgroundColor: White.core }}>
        <Fragment>
          {this.renderFilterList()}
          <Divider />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {this.renderSwiper()}
              <ListView
                dataSource={FavListData}
                headerLabel="Your Favourites"
                onPressCard={onPressCard}
              />
              <ListView
                dataSource={ds.reverse()}
                headerLabel="Offers near you"
                onPressCard={onPressCard}
              />
              <ListView
                dataSource={ds}
                horizontal={false}
                onPressCard={onPressCard}
              />
            </View>
          </ScrollView>
          <Filter
            isVisible={showFilter}
            onPressFilter={onPressFilter}
            onSelectFilter={onSelectFilter}
            filter={filter}
          />
        </Fragment>
      </SafeAreaView>
    );
  }
}

export default Home;
