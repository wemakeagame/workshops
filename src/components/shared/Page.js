import React from "react";

export default class Page extends React.Component {
  render() {
    return (
      <div className={"page container " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
