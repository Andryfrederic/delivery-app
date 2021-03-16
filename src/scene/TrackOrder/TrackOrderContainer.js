import React, { Fragment, Component } from "react";

import TrackOrder from "./TrackOrder";

class TrackOrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderStatus: 0,
      coordinates: {
        user: { latitude: 12.9763687, longitude: 77.6245263 },
        restaurant: { latitude: 12.978276, longitude: 77.6358236 },
        delivery: { latitude: 12.9778629, longitude: 77.6344209 }
      }
    };
  }

  changeOrderStatus = () => {
    if (this.state.orderStatus === 5) {
      this.setState({
        orderStatus: 0
      });
    } else {
      this.setState({
        orderStatus: this.state.orderStatus + 1
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.changeOrderStatus();
    }, 10000);
  }

  render() {
    const { orderStatus, coordinates } = this.state;

    return (
      <Fragment>
        <TrackOrder orderStatus={orderStatus} coordinates={coordinates} />
      </Fragment>
    );
  }
}

export default TrackOrderContainer;
