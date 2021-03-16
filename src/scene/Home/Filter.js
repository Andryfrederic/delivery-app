import React, { Component } from "react";
import {
  Modal,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Icon, Slider } from "react-native-elements";

import Button from "../../components/Button";

import { styles, Black, White, Green } from "./styles";

const { filterLabelTextStyle, circle, filterTextStyle } = styles;

export const FilterType = {
  Dietary: { key: "dietary", label: "Dietary", options: ["Pure Veg"] },
  Price: {
    key: "price",
    label: "Price Range",
    options: ["₹", "₹₹", "₹₹₹", "₹₹₹₹"]
  },
  MaxDeliveryFee: {
    key: "maxDeliveryFee",
    label: "Max. Delivery Fee",
    options: ["₹10", "₹20", "₹30", "₹30+"]
  },
  Sort: {
    key: "sort",
    label: "Sort",
    options: [
      {
        key: "default",
        label: "Picked for you (default)",
        iconName: "badge",
        iconType: "simple-line-icon"
      },
      {
        key: "popular",
        label: "Most Popular",
        iconName: "fire",
        iconType: "simple-line-icon"
      },
      {
        key: "rating",
        label: "Rating",
        iconName: "star",
        iconType: "simple-line-icon"
      },
      {
        key: "time",
        label: "Delivery Time",
        iconName: "clock",
        iconType: "simple-line-icon"
      }
    ]
  }
};

class Filter extends Component {
  onPressPriceFilter = item => {
    const { filter, onSelectFilter } = this.props;
    const { selectedFilters } = filter;

    let selectedItems = {
      ...selectedFilters.price
    };

    selectedItems[item] = !selectedItems[item];

    onSelectFilter({
      ...selectedFilters,
      ...{
        price: selectedItems
      }
    });
  };

  onPressClearFilter = () => {
    const { onSelectFilter } = this.props;

    const selectedFilters = {
      dietary: null,
      maxDeliveryFee: 10,
      sort: "default",
      price: {
        "₹": false,
        "₹₹": false,
        "₹₹₹": false,
        "₹₹₹₹": false
      }
    };

    onSelectFilter(selectedFilters);
  };

  renderDeliveryContent = () => {
    const { filter, onSelectFilter } = this.props;
    const { selectedFilters } = filter;
    const { MaxDeliveryFee } = FilterType;

    return (
      <View style={{ flexDirection: "column", marginVertical: 15 }}>
        <Text style={filterLabelTextStyle}>{MaxDeliveryFee.label}</Text>
        <Text style={[filterTextStyle, { marginVertical: 10 }]}>
          {`₹ ${selectedFilters.maxDeliveryFee}`}
        </Text>
        <Slider
          value={selectedFilters.maxDeliveryFee}
          minimumValue={10}
          maximumValue={50}
          minimumTrackTintColor={Black.tint50Percent}
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor={Black.tint75Percent}
          step={1}
          onValueChange={value =>
            onSelectFilter({
              ...selectedFilters,
              ...{ maxDeliveryFee: value }
            })
          }
        />
      </View>
    );
  };

  renderFilterContent = () => {
    const { filter, onSelectFilter } = this.props;
    const { selectedFilters } = filter;
    const { Dietary, Price, MaxDeliveryFee, Sort } = FilterType;

    const isVeg = selectedFilters.dietary ? selectedFilters.dietary.veg : false;

    const DietaryFilterContent = () => {
      return (
        <View style={{ flexDirection: "column", marginVertical: 15 }}>
          <Text style={filterLabelTextStyle}>{Dietary.label}</Text>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() =>
              onSelectFilter({
                ...selectedFilters,
                ...{ dietary: { veg: !isVeg } }
              })
            }
          >
            <View style={{ flexDirection: "row", marginVertical: 15 }}>
              <Icon
                name="leaf"
                type="entypo"
                color={isVeg ? Green.core : Black.core}
                containerStyle={{ marginRight: 10 }}
              />
              <Text style={filterTextStyle}>{Dietary.options[0]}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    };

    const PriceFilterContent = () => {
      return (
        <View style={{ flexDirection: "column", marginVertical: 15 }}>
          <Text style={filterLabelTextStyle}>{Price.label}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25
            }}
          >
            {Price.options.map(item => {
              return (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={
                    selectedFilters.price[item]
                      ? circle
                      : [circle, { backgroundColor: White.tint75Percent }]
                  }
                  onPress={() => this.onPressPriceFilter(item)}
                  key={item}
                >
                  <Text
                    style={{
                      color: selectedFilters.price[item]
                        ? White.core
                        : Black.core
                    }}
                  >
                    {item}
                  </Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </View>
      );
    };

    const SortFilterContent = () => {
      return (
        <View style={{ flexDirection: "column", marginVertical: 15 }}>
          <Text style={filterLabelTextStyle}>{Sort.label}</Text>
          {Sort.options.map(item => {
            return (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() =>
                  onSelectFilter({
                    ...selectedFilters,
                    ...{ sort: item.key }
                  })
                }
                key={item.label}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    <Icon
                      size={20}
                      name={item.iconName}
                      type={item.iconType}
                      containerStyle={{ marginRight: 10 }}
                    />
                    <Text style={filterTextStyle} key={item}>
                      {item.label}
                    </Text>
                  </View>

                  <Icon
                    name={"md-checkmark"}
                    type={"ionicon"}
                    containerStyle={{ marginRight: 10 }}
                    color={
                      item.key === selectedFilters.sort
                        ? Green.core
                        : White.core
                    }
                  />
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      );
    };

    switch (filter.visibleFilterType) {
      case Dietary.key:
        return <DietaryFilterContent />;

      case Price.key:
        return <PriceFilterContent />;

      case MaxDeliveryFee.key:
        return this.renderDeliveryContent();

      case Sort.key:
        return <SortFilterContent />;

      default:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={[filterTextStyle, { alignSelf: "flex-end" }]}
                onPress={this.onPressClearFilter}
              >
                Clear All
              </Text>
              <DietaryFilterContent />
              <PriceFilterContent />
              {this.renderDeliveryContent()}
              <SortFilterContent />
            </View>
          </ScrollView>
        );
    }
  };

  render() {
    const { isVisible, onPressFilter, filter } = this.props;
    const { visibleFilterType } = filter;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {}}
      >
        <SafeAreaView
          style={{
            flex: visibleFilterType ? 0.5 : 0.1,
            backgroundColor: "rgba(60, 60, 60, 0.5)"
          }}
        >
          <TouchableOpacity style={{ flex: 1 }} onPressOut={onPressFilter} />
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: visibleFilterType ? 0.5 : 0.9,
            backgroundColor: White.core
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flex: 1,
              padding: 25
            }}
          >
            {this.renderFilterContent()}
            <Button
              label="Apply Filter"
              onPress={onPressFilter}
              containerStyle={{ marginVertical: 10 }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

export default Filter;
