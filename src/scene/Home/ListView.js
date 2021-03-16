import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";

import { styles } from "./styles";
import FeedsCard from "../../components/FeedsCard";

const { listTitleTextStyle, listViewContainerStyle } = styles;

class ListView extends Component {
  keyExtractor = (item, index) => index.toString();

  renderCard = ({ item }) => {
    const { imageURL, title, time, rating, tag, location, priceRange } = item;
    const { horizontal, onPressCard } = this.props;

    return (
      <FeedsCard
        imageURL={imageURL}
        title={title}
        time={time}
        rating={rating}
        tag={tag}
        location={location}
        priceRange={priceRange}
        horizontal={horizontal}
        onPress={() => onPressCard(item)}
      />
    );
  };

  render() {
    const { dataSource, headerLabel, horizontal } = this.props;

    const containerStyle = horizontal
      ? listViewContainerStyle
      : [
          listViewContainerStyle,
          {
            marginVertical: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center"
          }
        ];

    return (
      <View style={containerStyle}>
        <Text style={listTitleTextStyle}>{headerLabel}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={dataSource}
          renderItem={this.renderCard}
          keyExtractor={this.keyExtractor}
          horizontal={horizontal}
        />
      </View>
    );
  }
}

ListView.propTypes = {
  dataSource: PropTypes.array,
  headerLabel: PropTypes.string,
  horizontal: PropTypes.bool,
  onPressCard: PropTypes.func
};

ListView.defaultProps = {
  dataSource: [],
  headerLabel: "",
  horizontal: true,
  onPressCard: null
};

export default ListView;
