import React, { Fragment, Component } from "react";

import CurrentOrder from "./CurrentOrder";

class CurrentOrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressTrackOrder = () => {
    this.props.navigation.navigate("TrackOrder");
  };

  render() {
    return (
      <Fragment>
        <CurrentOrder onPressTrackOrder={this.onPressTrackOrder} />
      </Fragment>
    );
  }
}

export default CurrentOrderContainer;
