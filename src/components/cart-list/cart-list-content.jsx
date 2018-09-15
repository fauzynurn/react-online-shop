import React, { Component } from "react";
import { Consumer } from "../../DataProvider";
import ReactLoading from "react-loading";
import { Alert } from "reactstrap";
import Axios from "axios";

class CartListContent extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, visible: false };
  }
  packInputData = e => {
    e.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      emailaddress: document.getElementById("mail").value,
      shippingaddress: document.getElementById("address").value,
      phonenumber: document.getElementById("phonenum").value,
      items: this.props.context.inCart
    };
    this.setState(
      {
        isLoading: true,
        deliverable: data
      },
      () => {
        Axios.post(
          "http://127.0.0.1:8000/api/penjualan",
          this.state.deliverable
        )
          .then(result =>
            this.setState({
              isLoading: false,
              visible: true
            })
          )
          .catch(er => {
            console.log("this is", er);
          });
      }
    );
  };

  countTotalPrice = () => {
    return this.props.context.inCart.reduce((prev, next) => {
      return prev + next.qty * next.price;
    }, 0);
  };
  render() {
    let numFormatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return (
      <div>
        <Alert
          style={{ margin: 20, position: "absolute", top: 0, right: 0 }}
          color="success"
          isOpen={this.state.visible}
          toggle={() => this.setState({ visible: false })}
        >
          We have sent you an email confirmation. You can check your email right
          now.
        </Alert>
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
                              <td>{numFormatter.format(x.qty * x.price)}</td>
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
                  {this.props.context.inCart.length > 0 ? (
                    <div>
                      <b style={{ fontSize: 28 }}>
                        Total(
                        {this.props.context.total} items) :{" "}
                        {numFormatter.format(this.countTotalPrice())}
                      </b>
                      <p style={{ fontSize: 15 }}>
                        First, we need some of your information in order to
                        proceed the order
                      </p>
                      <hr />
                      <form onSubmit={this.packInputData}>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="mail"
                            aria-describedby="emailHelp"
                          />
                          <small id="emailHelp" class="form-text text-muted">
                            We'll send purchase confirmation to this email
                          </small>
                        </div>
                        <div class="form-group">
                          <label for="text">Name</label>
                          <input
                            type="name"
                            name="name"
                            class="form-control"
                            id="name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="text">Phone Number</label>
                          <input
                            type="name"
                            name="phonenum"
                            class="form-control"
                            id="phonenum"
                          />
                        </div>
                        <div class="form-group">
                          <label for="text">Address</label>
                          <input
                            type="name"
                            name="address"
                            class="form-control"
                            id="address"
                          />
                        </div>
                        {!this.state.isLoading ? (
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        ) : (
                          <ReactLoading
                            type="bubbles"
                            color="#000000"
                            height={"12%"}
                            width={"12%"}
                          />
                        )}
                      </form>
                    </div>
                  ) : (
                    <p>No item recorded</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartListContent;
