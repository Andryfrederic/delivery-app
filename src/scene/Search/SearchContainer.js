import React, { Fragment, Component } from "react";

import Search from "./Search";

class SearchContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search categoryList={CategoryList} />
      </Fragment>
    );
  }
}

export default SearchContainer;

const CategoryList = [
  {
    title: "Coffee",
    imageURL: require("../../../assets/images/category_9.jpg")
  },
  {
    title: "Tibetan",
    imageURL: require("../../../assets/images/category_3.jpg")
  },
  {
    title: "Mexican",
    imageURL: require("../../../assets/images/category_2.jpg")
  },
  {
    title: "Fast Food",
    imageURL: require("../../../assets/images/image_4.png")
  },
  {
    title: "Seafood",
    imageURL: require("../../../assets/images/category_4.jpg")
  },
  {
    title: "Juice and smoothies",
    imageURL: require("../../../assets/images/category_1.jpg")
  },
  {
    title: "Indian",
    imageURL: require("../../../assets/images/category_5.jpg")
  },
  {
    title: "Korean",
    imageURL: require("../../../assets/images/category_6.jpg")
  },
  {
    title: "Middle Eastern",
    imageURL: require("../../../assets/images/category_10.jpeg")
  },
  {
    title: "Mediterranean",
    imageURL: require("../../../assets/images/category_11.jpg")
  },
  {
    title: "Italian",
    imageURL: require("../../../assets/images/category_8.jpg")
  },
  {
    title: "Pizza",
    imageURL: require("../../../assets/images/category_7.jpg")
  }
];
