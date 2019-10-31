import React from "react";
import "./SearchEvent.css";

export default class SearchEvent extends React.Component {
  render() {
    return (
      <div className="search-box">
        <input type="text" placeholder="Search an event" />
        <button className="btn btn-primary">Search</button>
      </div>
    );
  }
}
