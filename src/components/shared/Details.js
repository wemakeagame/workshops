import React from "react";
import DetailItem from "./DetailItem";

import "./Details.css";

export default class Details extends React.Component {
  render() {
    const elements = this.props.elements.map(el => {
      return <DetailItem label={el.label}>{el.value}</DetailItem>;
    });

    return <div className="details">{elements}</div>;
  }
}
