import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingCart from "./containers/cart-list";
import Home from "./containers/home";
import DataProvider from "./DataProvider";

class App extends Component {
  render() {
    return (
      <Router>
        <DataProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart-list" component={ShoppingCart} />
        </DataProvider>
      </Router>
    );
  }
}

export default App;
