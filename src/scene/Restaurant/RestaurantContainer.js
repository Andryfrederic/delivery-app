import React, { Fragment, Component } from "react";

import Restaurant from "./Restaurant";

class RestaurantContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { item } = navigation.state.params;
    return {
      headerTitle: item.title
    };
  };

  render() {
    const { item } = this.props.navigation.state.params;

    return (
      <Fragment>
        <Restaurant selectedItem={item} menuItems={Menu} />
      </Fragment>
    );
  }
}

export default RestaurantContainer;

const Menu = [
  {
    title: "Recommended",
    items: [
      {
        name: "Lava Cake in a Jar",
        price: 150,
        details:
          "This 'cake in a jar' is truly a delectable dessert. It is carefully designed with layers of dark chocolate, crunchy nuts and dry fruit crumble. A melody of dark chocolate sprinkle is added to make it all the more indulgent.",
        imageURL: require("../../../assets/images/category_9.jpg")
      },
      {
        name: "Nutty Trail Mix (30 Gms)",
        price: 200,
        details:
          "Power-packed with a combination of crunchy cashews, peanuts, cranberries, roasted sunflower seeds, pumpkin seeds and sultana raisins – go nuts on our nutty trail mix, the healthiest snack you could ask for! Serves 1.",
        imageURL: require("../../../assets/images/category_3.jpg")
      },
      {
        name: "Mexican Burrito Bowl",
        price: 180,
        details:
          "A steak of paneer, infused with hot and tangy habanero-jalapeno duo, is grilled, sliced and served with an exciting satiating trio of tomato-paprika rice, spicy refried beans and crunchy roasted-corn salsa.",
        imageURL: require("../../../assets/images/category_2.jpg")
      }
    ]
  },
  {
    title: "Veg Mains",
    items: [
      {
        name: "enne Alfredo",
        price: 229,
        details:
          "Penne pasta tossed in a luscious alfredo sauce along with veggies, finished off with fresh parsley and grated cheese. Bring out the Kid-in-You!",
        imageURL: require("../../../assets/images/image_4.png")
      },
      {
        name: "Dragon Noodles with Dumplings",
        price: 119,
        details:
          "We’ve sworn by the ancient Chinese wisdom of well-balanced flavours in our bowl of dragon noodles and veggie dumplings – shiitake mushrooms and a handful of assorted crunchy veggie are seasoned in a hot wok and tossed with a fiery chilli paste and noodles. Pleasant little dumplings made with potatoes, cabbage, carrot and coriander simmered in red and green-chilli infused soy sauce rounds off this lip-smacking meal.",
        imageURL: require("../../../assets/images/category_4.jpg")
      },
      {
        name: "Beijing Paneer Vegetable Stir Fry",
        price: 220,
        details: "Beijing Paneer Vegetable Stir Fry",
        imageURL: require("../../../assets/images/category_1.jpg")
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Homemade Chocolate Cake",
        price: 65,
        details:
          "Bite into this dark chocolate cake that's generously layered with dark chocolate ganache and baked to perfection.",
        imageURL: require("../../../assets/images/category_6.jpg")
      },
      {
        name: "Blueberry Oatmeal Cake",
        price: 85,
        details: "",
        imageURL: require("../../../assets/images/category_10.jpeg")
      },
      {
        name: "Lava Cake in a Jar",
        price: 180,
        details:
          "This 'cake in a jar' is truly a delectable dessert. It is carefully designed with layers of dark chocolate, crunchy nuts and dry fruit crumble. A melody of dark chocolate sprinkle is added to make it all the more indulgent.",
        imageURL: require("../../../assets/images/category_11.jpg")
      }
    ]
  }
];
