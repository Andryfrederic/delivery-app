import React, { Component } from "react";
import { Modal, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Icon } from "react-native-elements";

import Button from "../../components/Button";

import { styles, White, Black } from "./styles";

const {
  inputContainerStyle,
  placeholderTextStyle,
  titleTextStyle,
  buttonStyle
} = styles;

class Filter extends Component {
  renderFilterContent = type => {
    switch (type) {
      case a:
        break;

      default:
        break;
    }
  };

  render() {
    const { isVisible, onPressClose } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {}}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: White.core }}>
          <Icon
            name="close"
            type="material"
            color={Black.tint75Percent}
            size={35}
            iconStyle={{ alignSelf: "flex-start", padding: 25 }}
            onPress={onPressClose}
          />
          <View
            style={{
              flex: 1,
              padding: 25,
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <View>
              <Text style={titleTextStyle}>Enter your mobile number</Text>
              <View style={inputContainerStyle}>
                <Text style={placeholderTextStyle}>+91</Text>
                <TextInput
                  keyboardType="phone-pad"
                  placeholder="Enter mobile number"
                  style={placeholderTextStyle}
                  maxLength={10}
                  underlineColorAndroid="transparent"
                  autoFocus
                />
              </View>
            </View>

            <Button label="Next" containerStyle={buttonStyle} />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

export default Filter;
