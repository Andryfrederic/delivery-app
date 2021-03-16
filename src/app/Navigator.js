import React from "react";
import {
  SafeAreaView,
  MaterialTopTabBar,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "../scene/Home/HomeContainer";
import Login from "../scene/Login/LoginContainer";
import Cart from "../scene/Cart/CartContainer";
import Settings from "../scene/Settings/Settings";
import History from "../scene/History/HistoryContainer";
import CurrentOrder from "../scene/CurrentOrder/CurrentOrderContainer";
import TrackOrder from "../scene/TrackOrder/TrackOrderContainer";
import Search from "../scene/Search/SearchContainer";
import AppIntro from "../scene/AppIntro";
import Restaurant from "../scene/Restaurant/RestaurantContainer";

import Fonts from "../styles/Fonts";

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: props => ({
        header: null
        // https://reactnavigation.org/docs/navigators/stack check this for styles
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#F7F7F7" }
  }
);

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: props => ({
      header: null
    })
  }
});

const CartNavigator = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: props => ({
      header: null
    })
  }
});

const HistoryNavigator = createStackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: props => ({
        header: null
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#F7F7F7" }
  }
);

const CurrentOrderNavigator = createStackNavigator(
  {
    CurrentOrder: {
      screen: CurrentOrder,
      navigationOptions: props => ({
        header: null
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#F7F7F7" }
  }
);

const OrderHistoryTopTabNavigator = createMaterialTopTabNavigator(
  {
    Past: HistoryNavigator,
    Current: CurrentOrderNavigator
  },
  {
    tabBarComponent: SafeAreaMaterialTopTabBar,
    tabBarOptions: {
      activeTintColor: "#141414",
      //inactiveTintColor: Black.tint25Percent,
      showLabel: true,
      style: { backgroundColor: "white" },
      indicatorStyle: { backgroundColor: "#141414", height: 3 },
      labelStyle: {
        color: "#141414",
        fontSize: 16,
        fontFamily: Fonts.LatoRegular
      }
    }
  }
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: props => ({
        header: null
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#F7F7F7" }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    HOME: AppStackNavigator,
    SEARCH: SearchStackNavigator,
    CART: CartNavigator,
    Order: OrderHistoryTopTabNavigator,
    SETTINGS: SettingsNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case "HOME":
            return (
              <MaterialCommunityIcons
                name="home"
                size={35}
                color={tintColor}
                style={{ marginTop: 5 }}
              />
            );
          case "SEARCH":
            return (
              <MaterialIcons
                name="search"
                size={40}
                color={tintColor}
                style={{ marginTop: 5 }}
              />
            );

          case "CART":
            return (
              <MaterialIcons
                name="restaurant-menu"
                size={30}
                color={tintColor}
                style={{ marginTop: 5 }}
              />
            );

          case "SETTINGS":
            return (
              <MaterialCommunityIcons
                name="account"
                size={35}
                color={tintColor}
                style={{ marginTop: 5 }}
              />
            );

          case "Order":
            return (
              <MaterialCommunityIcons
                name="receipt"
                size={30}
                color={tintColor}
                style={{ marginTop: 5 }}
              />
            );

          default:
            iconName = "gear";
            break;
        }

        return (
          <EvilIcons
            name={iconName}
            size={35}
            color={tintColor}
            style={{ marginTop: 5 }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#141414",
      //inactiveTintColor: Black.tint25Percent,
      showLabel: false,
      style: { marginBottom: 5 }
    }
  }
);

const TopNavigation = createStackNavigator({
  Main: {
    screen: TabNavigator,
    navigationOptions: () => ({
      header: null
    })
  },
  TrackOrder: {
    screen: TrackOrder,
    navigationOptions: props => ({
      headerTintColor: "#141414",
      headerTitleStyle: {
        color: "#141414"
      }
    })
  },
  Restaurant: {
    screen: Restaurant,
    navigationOptions: props => ({
      headerTintColor: "#141414",
      headerTitleStyle: {
        color: "#141414"
      }
    })
  }
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: TopNavigation,
      Intro: AppIntro
    },
    {
      initialRouteName: "Intro"
    }
  )
);
