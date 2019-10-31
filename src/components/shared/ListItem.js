import React from "react";

import "./ListItem.css";

export default function ListItem(props) {
  const description = props.item.description.substr(0, props.maxChar) + "...";

  return (
    <div className="list-item">
      <div className="info-wrapper">
        <h4>{props.item.title}</h4>
        <div className="description">{description}</div>
      </div>
      {props.showImage !== false && (
        <div className="image">
          <img src={props.item.image} alt="eventImage" />
        </div>
      )}
    </div>
  );
}
