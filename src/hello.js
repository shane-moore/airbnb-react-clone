import React from "react";
import ReactDOM from "react-dom";
import "./index.js";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.firstName}</div>
        <div>{this.props.lastName}</div>
      </div>
    );
  }
}

export default Hello;
