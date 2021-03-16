import { StyleSheet } from "react-native";

import Fonts from "../../styles/Fonts";
import { ComponentColors, Colors } from "../../styles/BrandColors";

export const { White, Black } = Colors;

export const styles = StyleSheet.create({
  titleTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 16,
    color: ComponentColors.TextColorDark
  }
});
