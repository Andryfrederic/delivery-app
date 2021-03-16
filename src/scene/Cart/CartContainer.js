import React, { Fragment, Component } from "react";

import Cart from "./Cart";

class CartContainer extends Component {
  render() {
    return (
      <Fragment>
        <Cart
          selectedItems={SelectedItems}
          location={Address}
          billingInfo={BillingInfo}
        />
      </Fragment>
    );
  }
}

export default CartContainer;

const SelectedItems = [
  {
    id: 26789,
    name: "Chicken Zinger, 4 Hot wings, Large PopCorn and 250 ml Pepsi",
    price: 255,
    count: 3
  }
];

const Address = {
  coordinate: { latitude: 12.9763687, longitude: 77.6245263 },
  title: "Home",
  address: "3718 Birch  Street, El Paso, TX, Texas, 79930"
};

const BillingInfo = {
  discount: 75,
  tax: 23,
  deliveryFee: 30
};
