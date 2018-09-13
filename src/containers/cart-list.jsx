import React, { Component } from "react";
import NavBar from "../components/navbar";
import DataProvider, { Consumer } from "../DataProvider";
import CartListContent from "../components/cart-list/cart-list-content";

class ShoppingCart extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Consumer>{context => <CartListContent context={context} />}</Consumer>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
