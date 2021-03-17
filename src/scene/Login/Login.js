import React, { Fragment, Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";

import Button from "../../components/Button";
import Authentication from "./Authentication";

import { styles, White, Concrete } from "./styles";

const {
  titleTextStyle,
  placeholderTextStyle,
  skipButtonStyle,
  skipButtonContainerStyle,
  skipButtonTextStyle,
  inputContainerStyle
} = styles;

class Login extends Component {
  render() {
    const {
      onPressSkipButton,
      onPressLoginButton,
      showAuthScreen,
      onPressCloseButton
    } = this.props;

    return (
      <Fragment>
        <View style={{ flex: 0.8 }}>
          <ImageBackground
            source={require("../../../assets/images/food_photography.jpg")}
            style={{ flex: 2.5/3 }}
          >
            <TouchableOpacity
              style={skipButtonContainerStyle}
              onPress={onPressSkipButton}
              underlayColor="transparent"
            >
              <Button
                label="Skip"
                containerStyle={skipButtonStyle}
                textStyle={skipButtonTextStyle}
                onPress={onPressSkipButton}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <SafeAreaView
          style={{
            flex: 0.15,
            backgroundColor: White.core,
            paddingHorizontal: 10
          }}
        >
          <Text style={[titleTextStyle,{textAlign:'center'}]}>Get started with Eatsy</Text>
          <TouchableHighlight
            onPress={onPressLoginButton}
            underlayColor="transparent"
          >
            <View style={inputContainerStyle}>
              <Text style={placeholderTextStyle}>+91</Text>
              <Text
                style={[
                  placeholderTextStyle,
                  { color: Concrete.tint75Percent }
                ]}
              >
                Enter mobile number
              </Text>
            </View>
          </TouchableHighlight>
        </SafeAreaView>
        <Authentication
          isVisible={showAuthScreen}
          onPressClose={onPressCloseButton}
        />
      </Fragment>
    );
  }
}

export default Login;
