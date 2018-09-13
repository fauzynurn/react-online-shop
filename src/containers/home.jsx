import React, { Component } from "react";
import Items from "../components/home/items";
import DataProvider from "../DataProvider";
import NavBar from "../components/navbar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Items />
      </React.Fragment>
    );
  }
}

export default Home;
