import React, { Component } from "react";
import { Consumer, Provider } from "../DataProvider";
import shopping_cart from "../comp-images/shopping_cart.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <b>Bahtera Shop</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <Link to="/cart-list">
            {" "}
            <img
              src={shopping_cart}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <span
              style={{ marginRight: 25 }}
              className="badge badge-pill badge-warning"
            >
              <Consumer>{context => context.total}</Consumer>
            </span>
          </Link>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              id="dropdownMenuOffset"
              data-offset="10,20"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Fauzi Nur Noviansyah
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Manage Orders
              </a>
              <a className="dropdown-item" href="">
                Manage Products
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
