import React, { Fragment, Component } from "react";
import { View, Text, Image } from "react-native";
import LottieView from "lottie-react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Icon } from "react-native-elements";
import SlidingUpPanel from "rn-sliding-up-panel";

import ProgressBarHorizontal from "../../components/ProgressBarHorizontal";
import DeliveryDetails from "./components/DeliveryDetails";

import { getRegionForCoordinates } from "./Calculation";

import {
  styles,
  ProgressBarWidth,
  SlideUpPanelHeight,
  MapViewHeight,
  MapViewWidth,
  MapViewStyle
} from "./styles";

const { timeTextStyle, statusTextStyle, arrivalTextStyle } = styles;

class TrackOrder extends Component {
  renderWaitingIndicator = () => {
    return (
      <LottieView
        source={require("../../../assets/lottie/waiting.json")}
        autoPlay
        loop
        style={{ zIndex: -1, height: 400, width: 800, alignSelf: "center" }}
        speed={0.5}
      />
    );
  };

  renderCookingAnimation = () => {
    return (
      <LottieView
        source={require("../../../assets/lottie/cooking.json")}
        autoPlay
        loop
        style={{ zIndex: -1 }}
      />
    );
  };

  renderMapView = () => {
    const { coordinates, orderStatus } = this.props;
    const { user, restaurant, delivery } = coordinates;

    let initialRegion;

    /*if (orderStatus === 2) {
      initialRegion = getRegionForCoordinates([restaurant, delivery]);
    } else if (orderStatus > 2) {
      initialRegion = getRegionForCoordinates([user, delivery]);
    }*/

    //Above code can be used to re-calculate region to track delivery
    initialRegion = getRegionForCoordinates([user, restaurant]);

    return (
      <View
        style={{
          height: MapViewHeight,
          width: MapViewWidth,
          marginTop: 15,
          marginBottom: 100,
          alignSelf: "center"
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          style={{ height: MapViewHeight, width: MapViewWidth }}
          region={initialRegion}
        >
          <MapView.Marker coordinate={user} title={"Home"}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../../assets/images/map_pin_home.png")}
            />
          </MapView.Marker>
          <MapView.Marker coordinate={restaurant} title={"Restaurant"}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../../assets/images/map_pin_restaurant.png")}
            />
          </MapView.Marker>
          {/*<MapView.Marker coordinate={delivery}>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../../../assets/images/map_pin_bike.png")}
            />
          </MapView.Marker>*/}
        </MapView>
        <View
          style={{
            right: 10,
            bottom: 10,
            position: "absolute"
          }}
        >
          <Icon raised name="my-location" type="material" />
        </View>
      </View>
    );
  };

  renderSlidingPanel = () => {
    return (
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={{ top: SlideUpPanelHeight, bottom: 100 }}
        // height={SlideUpPanelHeight + 180}
        friction={0.5}
      >
        <DeliveryDetails deliveryDetails={DeliveryInfo} />
      </SlidingUpPanel>
    );
  };

  renderProgressBar = () => {
    const { orderStatus } = this.props;

    let status0;
    let status1;
    let status2;
    let status3;
    let status4;
    let label = "";

    switch (orderStatus) {
      case 0:
        label = "Waiting for restaurant to accept your order";
        status0 = 0;
        break;

      case 1:
        label = "Preparing Your Order";
        status0 = 1;
        status1 = 0;
        break;

      case 2:
        label = "Picking up the order";
        status0 = 1;
        status1 = 1;
        status2 = 0;
        break;

      case 3:
        label = "Order on your way";
        status0 = 1;
        status1 = 1;
        status2 = 1;
        status3 = 0;
        break;

      case 4:
        label = "Order delivered";
        status0 = 1;
        status1 = 1;
        status2 = 1;
        status3 = 1;
        status4 = 1;
        break;

      default:
        label = "Waiting for restaurant to accept your order";
        break;
    }

    const ProgressBar = ({ progress, autoPlay }) => (
      <View style={{ flex: 1 }}>
        <ProgressBarHorizontal
          progress={progress}
          autoPlay={autoPlay}
          width={ProgressBarWidth}
        />
      </View>
    );

    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            marginVertical: 10
          }}
        >
          <ProgressBar progress={status0} autoPlay={orderStatus === 0} />
          <ProgressBar progress={status1} autoPlay={orderStatus === 1} />
          <ProgressBar progress={status2} autoPlay={orderStatus === 2} />
          <ProgressBar progress={status3} autoPlay={orderStatus === 3} />
          <ProgressBar progress={status4} autoPlay={false} />
        </View>
        <Text style={statusTextStyle}>{label}</Text>
      </View>
    );
  };

  render() {
    const { orderStatus } = this.props;

    return (
      <Fragment>
        <View
          style={{
            flexDirection: "column",
            flex: 1
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              paddingHorizontal: 15
            }}
          >
            <Text style={timeTextStyle}>9:15</Text>
            <Text style={arrivalTextStyle}>Estimated arrival</Text>
          </View>
          {this.renderProgressBar()}

          <Text style={[arrivalTextStyle, { alignSelf: "flex-start" }]}>
            Latest arrival at 9:30 pm
          </Text>
          {orderStatus === 0 ? this.renderWaitingIndicator() : null}
          {orderStatus === 1 ? this.renderCookingAnimation() : null}
          {orderStatus > 1 ? this.renderMapView() : null}
          {this.renderSlidingPanel()}
        </View>
      </Fragment>
    );
  }
}

export default TrackOrder;

const DeliveryInfo = {
  address: "3718 Birch  Street, El Paso, TX, Texas, 79930",
  billAmount: 860,
  restaurant: "Spicella Spanish Kitchen",
  note: "Pick up outside",
  status: "Reyansh Lucas is on the way",
  vehicleId: "MZ4589L",
  imageURL: "https://randomuser.me/api/portraits/men/41.jpg"
};
