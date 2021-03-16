import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";

import Login from "./Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAuthScreen: false
    };
  }

  componentDidMount() {
    // SplashScreen.hide();
  }

  onPressSkipButton = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  };

  onPressLoginButton = () => {
    this.setState({
      showAuthScreen: true
    });
  };

  onPressCloseButton = () => {
    this.setState({
      showAuthScreen: false
    });
  };

  render() {
    const { showAuthScreen } = this.state;

    return (
      <Login
        onPressSkipButton={this.onPressSkipButton}
        onPressLoginButton={this.onPressLoginButton}
        onPressCloseButton={this.onPressCloseButton}
        showAuthScreen={showAuthScreen}
      />
    );
  }
}

export default LoginContainer;
