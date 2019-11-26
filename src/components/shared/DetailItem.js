import React from "react";

export default class DetailItem extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
