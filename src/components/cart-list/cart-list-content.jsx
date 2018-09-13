import React, { Component } from "react";
import { Consumer } from "../../DataProvider";

class CartListContent extends Component {
  render() {
    return (
      <div
        style={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <p style={{ fontSize: 40 }}>
          <b>Shopping Cart</b>
        </p>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <a
                  onClick={() => this.props.context.clearCartList()}
                  style={{ float: "right", marginRight: 5 }}
                >
                  <b>Clear Shopping Cart</b>
                </a>
              </div>
              <div className="card-text">
                <table
                  className="table"
                  style={{
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.context.inCart.length > 0 ? (
                      this.props.context.inCart.map(x => {
                        return (
                          <tr>
                            <td>{x.productname}</td>
                            <td>{x.qty}</td>
                            <td>Rp. {x.qty * x.price}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td style={{ paddingLeft: 170 }}>
                          <p>No Content</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p>Summary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartListContent;
