import { StyleSheet } from "react-native";

import Fonts from "../../styles/Fonts";
import { screenWidth } from "../../utilities/ScreenSize";
import { Colors, ComponentColors } from "../../styles/BrandColors";

const ImageWidth = screenWidth;
const ImageHeight = ImageWidth * 0.5;
export const { Black, White } = Colors;

export const styles = StyleSheet.create({
  imageViewStyle: {
    height: ImageHeight,
    width: ImageWidth
  },
  titleTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 16,
    marginTop: 5,
    color: ComponentColors.TextColorDark
  },
  tagTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
    color: Black.tint50Percent,
    marginTop: 5
  },
  timeTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
    color: Black.tint50Percent
  },
  listItemTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    color: Black.tint75Percent,
    paddingVertical: 5
  },
  priceTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
    color: Black.tint25Percent
  }
});
