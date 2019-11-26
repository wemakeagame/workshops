import React from "react";
import WorkshopListItem from "./WorkshopListItem";

export default class WorkshopList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      items: props.items
    };
  }

  render() {
    const listItems = this.props.items.map((item, i) => (
      <WorkshopListItem
        item={item}
        key={"itemList" + i}
        maxChar={this.props.maxChar || 250}
        showImage={this.props.showImage}
      />
    ));

    return (
      <div className="list">
        {listItems}
        {!listItems.length ? (
          <p className="text-center">No item to be displayed here</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
