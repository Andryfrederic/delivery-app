import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import { ComponentColors, Colors } from "../../styles/BrandColors";
import Fonts from "../../styles/Fonts";

const { TextColorDark } = ComponentColors;
const { White } = Colors;

const FilterButton = ({
  onPress,
  containerStyle,
  textStyle,
  label,
  showIcon,
  showLabel,
  iconName,
  iconType
}) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={[styles.containerStyle, containerStyle]}>
        {showLabel ? (
          <Text style={[styles.textStyle, textStyle]}>{label}</Text>
        ) : null}
        {showIcon ? (
          <Icon
            name={iconName}
            type={iconType}
            color={TextColorDark}
            size={25}
            containerStyle={{ marginTop: 5, marginLeft: 5 }}
          />
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

FilterButton.propTypes = {
  textStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  label: PropTypes.string,
  showIcon: PropTypes.bool,
  showLabel: PropTypes.bool
};

FilterButton.defaultProps = {
  textStyle: {},
  containerStyle: {},
  label: "Button",
  iconName: "chevron-down",
  iconType: "material-community",
  showIcon: true,
  showLabel: true
};

export default FilterButton;

const styles = StyleSheet.create({
  textStyle: {
    color: TextColorDark,
    alignSelf: "center",
    fontFamily: Fonts.LatoBold,
    fontSize: 14
  },
  containerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: White.tint50Percent,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5
  }
});
