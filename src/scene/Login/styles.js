import { StyleSheet } from "react-native";

import Fonts from "../../styles/Fonts";
import { ComponentColors, Colors } from "../../styles/BrandColors";

export const { Black, White, Green, Concrete } = Colors;

export const styles = StyleSheet.create({
  titleTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 25,
    marginBottom: 25,
    marginTop: 10,
    color: ComponentColors.TextColorDark
  },
  placeholderTextStyle: {
    fontFamily: Fonts.LatoRegular,
    alignSelf: "center",
    padding: 15,
    fontSize: 20,
    color: ComponentColors.TextColorDark
  },
  skipButtonContainerStyle: {
    alignSelf: "flex-end",
    top: 50,
    right: 20,
    padding: 25
  },
  skipButtonStyle: {
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: White.tint75Percent
  },
  skipButtonTextStyle: {
    color: ComponentColors.TextColorDark
  },
  inputContainerStyle: {
    backgroundColor: White.tint50Percent,
    borderRadius: 5,
    borderColor: ComponentColors.Divider,
    borderWidth: 1,
    flexDirection: "row"
  },
  buttonStyle: {
    backgroundColor: Green.core
  }
});
