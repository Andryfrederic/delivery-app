/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/app/Navigator";
import { name as appName } from "./app.json";
import { YellowBox } from "react-native";

/**
 * TODO: Warning will be fixed with the update of latest version of "react-native-swiper"
 */
YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "ViewPagerAndroid"
]);

AppRegistry.registerComponent(appName, () => App);
