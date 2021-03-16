import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

import { ComponentColors } from "../../styles/BrandColors";

const Divider = ({ backgroundColor }) => (
  <View
    style={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      backgroundColor: backgroundColor,
      height: StyleSheet.hairlineWidth
    }}
  />
);

Divider.propTypes = {
  backgroundColor: PropTypes.string
};

Divider.defaultProps = {
  backgroundColor: ComponentColors.Divider
};

export default Divider;
