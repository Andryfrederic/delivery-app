import React, { Component } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import Divider from "../../components/Divider";
import { styles, White, Black } from "./styles";

const { titleTextStyle } = styles;

const RowItem = ({ iconName, onPress, label }) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15
        }}
      >
        <Icon
          name={iconName}
          type="material"
          color={Black.core}
          size={30}
          iconStyle={{ alignSelf: "flex-start", marginRight: 25 }}
          onPress={onPress}
        />
        <Text style={titleTextStyle}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

class Settings extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: White.core }}>
        <View style={{ paddingHorizontal: 15, backgroundColor: White.core }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15
            }}
          >
            <Avatar
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/men/41.jpg"
              }}
              size="large"
              containerStyle={{ marginRight: 15 }}
            />
            <Text style={titleTextStyle}>Mcauley Harvey</Text>
          </View>
          <Divider />
          <RowItem iconName="favorite" label="Your Favourites" />
          <RowItem iconName="payment" label="Payment" />
          <RowItem iconName="help" label="Help" />
          <RowItem iconName="local-offer" label="Promotions" />
          <RowItem iconName="info" label="About" />
        </View>
      </SafeAreaView>
    );
  }
}

export default Settings;
