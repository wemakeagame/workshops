import React from "react";
import ListItem from "./ListItem";

export default class ListEvent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      items: props.items
    };
  }

  render() {
    const listItems = this.state.items.map((item, i) => (
      <ListItem
        item={item}
        key={"itemList" + i}
        maxChar={this.props.maxChar || 250}
        showImage={this.props.showImage}
      />
    ));

    return <div className="list">{listItems}</div>;
  }
}
