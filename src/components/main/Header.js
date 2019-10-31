import React from "react";
import Menu from "./menu/Menu";

import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="title">
            <h3>Workshops Online</h3>
          </div>
          <div className="menus">
            <Menu
              menus={this.props.data}
              isAuthenticated={this.props.isAuthenticated}
              logout={this.props.logout}
            />
          </div>
        </div>
      </nav>
    );
  }
}
