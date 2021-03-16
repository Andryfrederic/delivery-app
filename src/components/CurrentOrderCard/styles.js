import { StyleSheet } from "react-native";

import { screenWidth } from "../../utilities/ScreenSize";
import Fonts from "../../styles/Fonts";
import { Colors, ComponentColors } from "../../styles/BrandColors";

export const { White, Black, Green } = Colors;

export const styles = StyleSheet.create({
  cardContainerStyle: {
    flexDirection: "column",
    backgroundColor: Colors.White.core,
    marginVertical: 10,
    padding: 15
  },
  imageCardStyle: {
    width: screenWidth - 30,
    height: screenWidth * 0.4,
    alignSelf: "center",
    backgroundColor: Colors.White.tint75Percent
  },
  cardContentStyle: {
    marginTop: 10,
    flexDirection: "column"
  },
  titleTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 16,
    marginVertical: 5,
    color: ComponentColors.TextColorDark
  },
  tagTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
    color: Black.tint50Percent
  },
  timeTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    marginTop: 5,
    paddingVertical: 5,
    color: Black.tint50Percent
  },
  amountTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 18,
    color: ComponentColors.TextColorDark
  }
});
