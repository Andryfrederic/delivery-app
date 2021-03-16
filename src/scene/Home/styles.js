import { StyleSheet } from "react-native";

import Fonts from "../../styles/Fonts";
import { screenWidth } from "../../utilities/ScreenSize";
import { Colors, ComponentColors } from "../../styles/BrandColors";

const ImageSwiperWidth = screenWidth;
const ImageSwiperHeight = ImageSwiperWidth * 0.5;
export const { Black, White, Green } = Colors;

export const styles = StyleSheet.create({
  listTitleTextStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 18,
    color: ComponentColors.TextColorDark
  },
  listViewContainerStyle: {
    backgroundColor: Colors.White.core,
    marginVertical: 10,
    padding: 10
  },
  filterLabelTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 20,
    color: ComponentColors.TextColorDark
  },
  imageSwiperStyle: {
    height: ImageSwiperHeight,
    width: ImageSwiperWidth
  },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: ComponentColors.TextColorDark,
    justifyContent: "center",
    alignItems: "center"
  },
  filterTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    color: Black.tint50Percent
  }
});
