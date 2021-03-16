import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

import { ComponentColors } from "../../styles/BrandColors";
import Fonts from "../../styles/Fonts";

const { ButtonBackground, TextColorLight } = ComponentColors;

const Button = ({ onPress, containerStyle, textStyle, label }) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={[styles.containerStyle, containerStyle]}>
        <Text onPress={onPress} style={[styles.textStyle, textStyle]}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  textStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  label: PropTypes.string
};

Button.defaultProps = {
  textStyle: {},
  containerStyle: {},
  label: "Button"
};

export default Button;

const styles = StyleSheet.create({
  textStyle: {
    color: TextColorLight,
    padding: 15,
    alignSelf: "center",
    fontFamily: Fonts.LatoBold,
    fontSize: 16
  },
  containerStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: ButtonBackground
  }
});
