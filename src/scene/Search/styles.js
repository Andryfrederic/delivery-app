import { StyleSheet } from "react-native";

import { screenWidth } from "../../utilities/ScreenSize";
import Fonts from "../../styles/Fonts";
import { ComponentColors, Colors } from "../../styles/BrandColors";

export const { White, Black } = Colors;

const imageViewWidth = screenWidth /4;
const imageViewHeight = imageViewWidth;

export const styles = StyleSheet.create({
  categoryImageStyle: {
    width: 70,
    height: 70,
    alignSelf:'flex-start'
  },
  semitransparentViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:'#FAEFF3',
    paddingLeft:5
    //  ComponentColors.SemiTransparentDarkOverlay
  },
  labelStyle: {
    fontFamily: Fonts.LatoBold,
    fontSize: 16,
    color: White.core,
    // position: "absolute"
  },
  inputTextStyle: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    paddingHorizontal: 15,
    color: ComponentColors.TextColorDark,
    flex: 1
  }
});
