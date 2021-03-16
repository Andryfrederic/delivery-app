import React, { Fragment, Component } from "react";
// import SplashScreen from "react-native-splash-screen";

import Home from "./Home";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: false,
      filter: {
        selectedFilters: {
          dietary: null,
          maxDeliveryFee: 10,
          sort: "default",
          price: {
            "₹": false,
            "₹₹": false,
            "₹₹₹": false,
            "₹₹₹₹": false
          }
        },
        visibleFilterType: null
      }
    };
  }

  componentDidMount() {
    // SplashScreen.hide();
  }

  onSelectFilter = value => {
    this.setState(prevState => ({
      filter: { ...prevState.filter, selectedFilters: value }
    }));
  };

  onPressFilter = value => {
    this.setState(prevState => ({
      filter: { ...prevState.filter, visibleFilterType: value },
      showFilter: !this.state.showFilter
    }));
  };

  onPressCard = item => {
    //TODO: Use Redux or context API for state management
    this.props.navigation.navigate("Restaurant", {
      item
    });
  };

  render() {
    return (
      <Fragment>
        <Home
          onPressFilter={this.onPressFilter}
          showFilter={this.state.showFilter}
          onSelectFilter={this.onSelectFilter}
          filter={this.state.filter}
          onPressCard={this.onPressCard}
        />
      </Fragment>
    );
  }
}

export default HomeContainer;
