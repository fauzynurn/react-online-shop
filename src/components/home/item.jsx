import React, { Component } from "react";
class Item extends Component {
  render() {
    let numFormatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return (
      <React.Fragment>
        <div className="col">
          <div className="card" style={{ width: 288, marginBottom: 20 }}>
            <img
              className="card-img-top"
              src={this.props.data.imagesrc}
              style={{ height: 180 }}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <b>{this.props.data.productname}</b>
              </p>
              <p className="card-text">
                {numFormatter.format(this.props.data.price)}
              </p>
              {!this.props.data.isClicked ? (
                <div className="input-group number-spinner">
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ marginLeft: 75 }}
                    onClick={() =>
                      this.props.state.changeState(
                        this.props.data,
                        this.props.data.id
                      )
                    }
                  >
                    Add to cart
                  </button>
                </div>
              ) : (
                <div className="row" style={{ marginLeft: 3 }}>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() =>
                      this.props.state.decrement(
                        this.props.data,
                        this.props.data.id
                      )
                    }
                  >
                    <b>-</b>
                  </button>
                  <input
                    style={{ width: 175 }}
                    type="text"
                    readOnly
                    className="form-control text-center"
                    value={this.props.data.qty}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() =>
                      this.props.state.increment(
                        this.props.data,
                        this.props.data.id
                      )
                    }
                  >
                    <b>+</b>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  callMe() {
    this.props.data.isClicked = true;
    console.log(this.props.data.isClicked);
  }
}

export default Item;
