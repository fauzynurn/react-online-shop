import React, { Component } from "react";
import a6 from "./comp-images/a6.jpg";
import honor10 from "./comp-images/honor10.jpg";
import nova3i from "./comp-images/huaweinova3i.jpg";
import iPhoneX from "./comp-images/iPhoneX.jpg";
import mimix from "./comp-images/mimix.jpg";
import r5p from "./comp-images/redmi5plus.jpg";
import _ from "lodash";

export const { Provider, Consumer } = React.createContext();
class DataProvider extends Component {
  state = {
    items: [
      {
        id: 0,
        isClicked: false,
        qty: 0,
        imagesrc: a6,
        price: 3250000,
        productname: "Samsung Galaxy A6"
      },

      {
        id: 1,
        isClicked: false,
        qty: 0,
        imagesrc: honor10,
        price: 4000000,
        productname: "Honor X"
      },
      {
        id: 2,
        isClicked: false,
        qty: 0,
        imagesrc: nova3i,
        price: 2400000,
        productname: "Huawei Nova 3i"
      },
      {
        id: 3,
        isClicked: false,
        qty: 0,
        imagesrc: iPhoneX,
        price: 11000000,
        productname: "iPhone X"
      },
      {
        id: 4,
        isClicked: false,
        qty: 0,
        imagesrc: mimix,
        price: 3250000,
        productname: "Xiaomi Mi Mix 2"
      },
      {
        id: 5,
        isClicked: false,
        qty: 0,
        imagesrc: r5p,
        price: 2150000,
        productname: "Xiaomi Redmi 5 Plus"
      }
    ],
    total: 0,
    inCart: [],
    increment: (obj, id) => {
      const gItems = [...this.state.items];
      const result = Math.ceil((id + 1) / 3.0);
      const whereToLook = result - 1;
      const items = [...this.state.items[whereToLook]];
      items[id - 3 * whereToLook] = { ...obj };
      items[id - 3 * whereToLook].qty++;
      gItems[whereToLook] = items;
      this.setState({ items: gItems }, () => {
        this.state.countTotal();
      });
      var newObj = this.state.searchById(id);
      const cloneInCart = [...this.state.inCart];
      if (newObj !== undefined) {
        cloneInCart[cloneInCart.indexOf(newObj)].qty++;
        this.setState(
          {
            inCart: cloneInCart
          },
          () => {
            console.log("callback inCart:", this.state);
          }
        );
      } else {
        this.state.pushToCart(obj);
      }
    },
    decrement: (obj, id) => {
      const gItems = [...this.state.items];
      const result = Math.ceil((id + 1) / 3.0);
      const whereToLook = result - 1;
      const items = [...this.state.items[whereToLook]];
      items[id - 3 * whereToLook] = { ...obj };
      const cloneInCart = [...this.state.inCart];
      if (items[id - 3 * whereToLook].qty !== 0) {
        if (items[id - 3 * whereToLook].qty === 1) {
          items[id - 3 * whereToLook].qty--;
          cloneInCart.splice(cloneInCart.indexOf(this.state.searchById(id)), 1);
        } else {
          items[id - 3 * whereToLook].qty--;
          cloneInCart[cloneInCart.indexOf(this.state.searchById(id))].qty--;
        }
        this.setState(
          {
            inCart: cloneInCart
          },
          () => {
            console.log("callback inCart:", this.state.inCart);
          }
        );
        gItems[whereToLook] = items;
        this.setState({ items: gItems }, () => {
          this.state.countTotal();
        });
      }
    },
    searchById: id => {
      return this.state.inCart.find(x => {
        return x.id === id;
      });
    },
    clearCartList: () => {
      //Clear the inCart array and loop through items array and set the specific item's qty to zero
      //and set isClicked to false
      var cloneItems = [...this.state.items];
      cloneItems.map(x => {
        {
          x.map(a => {
            a.isClicked = false;
            a.qty = 0;
          });
        }
      });
      this.setState({
        items: cloneItems,
        inCart: [],
        total: 0
      });
    },
    countTotal: () => {
      var qty = 0;
      this.state.items.map(item => {
        qty += item.reduce(function(prevVal, elem) {
          return prevVal + elem.qty;
        }, 0);
      });
      this.setState({
        total: qty
      });
    },
    changeState: (obj, id) => {
      const gItems = [...this.state.items];
      const result = Math.ceil((id + 1) / 3.0);
      const whereToLook = result - 1;
      const items = [...this.state.items[whereToLook]];
      items[id - 3 * whereToLook] = { ...obj };
      items[id - 3 * whereToLook].isClicked = true;
      gItems[whereToLook] = items;
      this.setState({ items: gItems });
    },
    pushToCart: param => {
      const cartItem = param;
      cartItem.qty++;
      this.setState(
        {
          inCart: [...this.state.inCart, cartItem]
        },
        () => {
          console.log("Callback: ", this.state.inCart);
        }
      );
    }
  };
  constructor() {
    super();
    this.state.items = _.chunk(this.state.items, 3);
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default DataProvider;
