import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import Swiper from "react-native-swiper";
import SplashScreen from "react-native-splash-screen";

import { ComponentColors, Colors } from "../../styles/BrandColors";
import Fonts from "../../styles/Fonts";
import { screenWidth, screenHeight } from "../../utilities/ScreenSize";

import Button from "../../components/Button";

class AppIntro extends Component {
  componentDidMount() {
    // SplashScreen.hide();
  }

  onPressSkip = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={containerStyle}>
        <Swiper autoplay activeDotColor={"#FFFFFF"}>
          <Image
            source={require("../../../assets/images/intro_1.jpg")}
            style={imageViewStyle}
          />
          <Image
            source={require("../../../assets/images/intro_2.jpg")}
            style={imageViewStyle}
          />
          <Image
            /*source={{
                    uri: "",
                    cache: "force-cache"
                  }}*/
            source={require("../../../assets/images/intro_3.jpg")}
            style={imageViewStyle}
          />
        </Swiper>
        <TouchableHighlight
          style={buttonStyle}
          underlayColor="transparent"
          onPress={this.onPressSkip}
        >
          <Text
            style={{
              color: Colors.White.core,
              fontSize: 20,
              fontFamily: Fonts.LatoRegular
            }}
          >
            Skip
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppIntro.propTypes = {
  //
};

AppIntro.defaultProps = {
  //
};

export default AppIntro;

const styles = StyleSheet.create({
  imageViewStyle: {
    height: screenHeight,
    width: screenWidth
  },
  containerStyle: {
    flex: 1
  },
  buttonStyle: {
    position: "absolute",
    bottom: 30,
    right: 30
  }
});

const { imageViewStyle, containerStyle, buttonStyle } = styles;
