import { StyleSheet } from "react-native";

import { screenWidth } from "../../utilities/ScreenSize";
import Fonts from "../../styles/Fonts";
import { Colors, ComponentColors } from "../../styles/BrandColors";

const { White, Black } = Colors;

const CardWidth = screenWidth * 0.7;
const CardHeight = CardWidth;

export const CardWidthVertical = screenWidth * 0.9;
export const CardHeightVertical = CardWidthVertical * 0.9;
export const ImageCardWidthVertical = CardWidthVertical - 20;
export const ImageCardHeightVertical = ImageCardWidthVertical * 0.6;

export const styles = StyleSheet.create({
  cardContainerStyle: {
    flexDirection: "column",
    backgroundColor: Colors.White.core,
    width: CardWidth,
    height: CardHeight,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: ComponentColors.CardShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5
  },
  imageCardStyle: {
    width: CardWidth - 20,
    height: CardHeight * 0.6,
    alignSelf: "center",
    backgroundColor: Colors.White.tint75Percent,
    borderRadius: 5
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
    color: Black.tint50Percent,
    backgroundColor: White.tint75Percent,
    padding: 5
  }
});
