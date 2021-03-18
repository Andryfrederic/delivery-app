import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Image,
  Modal,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { styles, Black } from "./styles";
import Fonts from "../../styles/Fonts";

import Divider from "../../components/Divider";
const wp = Dimensions.get("window").width/100;
const hp = Dimensions.get("window").height/100
const {
  labelStyle,
  inputTextStyle,
  categoryImageStyle,
  semitransparentViewStyle
} = styles;

class Search extends Component {
  constructor(props){
    super(props)
    this.state={  
        data:[] 
                }
        this.arrayholder = this.props.categoryList;
                        }

componentDidMount(){
  const { categoryList } = this.props;
  this.setState({
    data:categoryList
  })
}
  keyExtractor = (item, index) => index.toString();

  renderCategoryCard = ({ item, index }) => {
    const cardMargin =
      index % 2 === 0
        ? { marginRight: 10, marginLeft: 5 }
        : { marginLeft: 10, marginRight: 5 };

    return (
      <TouchableHighlight underlayColor="transparent"
      onPress={()=>alert(item.title+' '+'Clicked')}>
        <View
          style={[{ flexDirection: "row", marginVertical: 10,width:300,backgroundColor:'white' }, cardMargin]}
        >
          <Image source={item.imageURL} style={categoryImageStyle} />
            <View style={[semitransparentViewStyle,{marginLeft:2}]}>
                <Text style={[labelStyle,{color:'black'}]}>{item.title}</Text>
                <View style={{
                  // width:100
                }}>
                    <Text
                    style={{
                      textAlign:'justify'
                    }}>
                    De très nombreux exemples de phrases traduites contenant "category" –
                    </Text>
                </View>
            </View>
          
        </View>
      </TouchableHighlight>
    );
  };

  renderSeperator = () => <Divider />;

  renderCategories = () => {
    const { categoryList } = this.props;

    return (
      <View style={{ alignSelf: 'flex-start', flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          renderItem={this.renderCategoryCard}
          keyExtractor={this.keyExtractor}
          // numColumns={1}
        />
      </View>
    );
  };

  renderSearchButton = () => {
    return (
      <View style={{ padding: 15, flexDirection: "row" }}>
        <MaterialIcons
          name="search"
          size={30}
          color={Black.tint50Percent}
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="Search..."
          style={inputTextStyle}
          ref={(input) => { this.searchInput1 = input; }}
          maxLength={50}
          numberOfLines={1}
          underlineColorAndroid="transparent"
          onChangeText={text => this.searchFilterFunction(text)}
          autoFocus
        />
      </View>
    );
  };
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
          const newData = this.arrayholder.filter(item =>{
          const itemData = `${item.title.toUpperCase()}`;
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.renderSearchButton()}
        <Divider />
        <Text
          style={{
            fontFamily: Fonts.LatoBold,
            fontSize: 16,
            margin: 10,
            color: Black.tint75Percent
          }}
        >
          Top Categories
        </Text>
        {this.renderCategories()}

        <Modal 
    transparent={true}
    animationType="fade"
    visible={false}
    // onShow={() => { this.searchInput3.focus(); }}
    >
          <View
          style={{
            width:wp*100,
            height:hp*80,
            // backgroundColor:'grey'
          }}>
           
          </View>
</Modal>

      </SafeAreaView>
      
    );
  }
}

export default Search;
