import React, { Fragment, Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SafeAreaView } from "react-navigation";
import Fontisto from "react-native-vector-icons/Fontisto";

import Receipt from "../../components/Receipt";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

import { MapViewStyle, MapViewWidth } from "../TrackOrder/styles";
import { getRegionForCoordinates } from "../TrackOrder/Calculation";

import { styles } from "./styles";
const { addressTextStyle } = styles;

class Cart extends Component {
  renderAddressInfo = () => {
    const { location } = this.props;
    const { coordinate, title, address } = location || {};
    const initialRegion = getRegionForCoordinates([coordinate]);

    return (
      <View style={{ flexDirection: "row", padding: 15 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          style={{ height: MapViewWidth / 2, width: MapViewWidth / 2 }}
          region={initialRegion}
        >
          <MapView.Marker coordinate={coordinate} title={title}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../assets/images/map_pin.png")}
            />
          </MapView.Marker>
        </MapView>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            paddingHorizontal: 10,
            justifyContent: "space-between"
          }}
        >
          <Text numberOfLines={4} ellipsizeMode="tail" style={addressTextStyle}>
            {address}
          </Text>

          <Text style={[addressTextStyle, { color: "green" }]}>
            Add delivery note
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const { selectedItems, billingInfo } = this.props;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start"
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderAddressInfo()}
          <Divider />
          <View
            style={{
              flexDirection: "row",
              padding: 15,
              alignItems: "center"
            }}
          >
            <Fontisto name="stopwatch" size={25} style={{ marginRight: 15 }} />
            <Text style={addressTextStyle}>Delivery time - 30-40 mins</Text>
          </View>
          <Divider />
          <Receipt selectedItems={selectedItems} billingInfo={billingInfo} />
        </ScrollView>
        <Button
          containerStyle={{ backgroundColor: "green", padding: 10 }}
          label="Place Order"
        />
      </SafeAreaView>
    );
  }
}

export default Cart;
