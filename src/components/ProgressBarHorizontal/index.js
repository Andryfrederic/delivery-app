import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";

import { ComponentColors, Colors } from "../../styles/BrandColors";
import Fonts from "../../styles/Fonts";

const { ButtonBackground, TextColorLight, Divider } = ComponentColors;

const ProgressBarHorizontal = ({ progress, autoPlay, width }) => {
  return (
    <Progress.Bar
      progress={progress}
      indeterminate={autoPlay}
      indeterminateAnimationDuration={2000}
      width={width}
      height={4}
      borderRadius={0}
      unfilledColor={Divider}
      borderColor={progress === 1 ? Colors.Green.core : Divider}
      color={Colors.Green.core}
    />
  );
};

ProgressBarHorizontal.propTypes = {
  progress: PropTypes.number,
  autoPlay: PropTypes.bool
};

ProgressBarHorizontal.defaultProps = {
  progress: 0,
  autoPlay: false
};

export default ProgressBarHorizontal;

const styles = StyleSheet.create({
  //
});
