import React, { Component } from "react";
import Item from "./item";
import { Consumer } from "../../DataProvider";

class Items extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 25 }}>
        <Consumer>
          {context => {
            return context.items.map(x => {
              return (
                <div className="row">
                  {x.map(content => {
                    return (
                      <Item
                        data={content}
                        state={context}
                        handleIncrement={context.increment}
                      />
                    );
                  })}
                </div>
              );
            });
          }}
        </Consumer>
      </div>
    );
  }
}

export default Items;
