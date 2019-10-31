import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import { withRouter } from "react-router-dom";
import auth from "../../../core/auth";

class Menu extends React.Component {
  login = () => {
    const { history } = this.props;
    if (history) history.push("/login");
  };

  invokeAction = action => {
    switch (action) {
      case "login":
        this.login();
        break;
      case "logout":
        this.props.logout();
        break;
      default:
        break;
    }
  };

  render() {
    const menus = this.props.menus.map((menu, i) => {
      if (menu.path === "/login") {
        menu.description = this.props.isAuthenticated ? "Logout" : "Login";
        menu.action = this.props.isAuthenticated ? "logout" : "login";
        menu.customClass = "secondary-menu";
      }

      if (menu.path === "/user") {
        menu.shouldNotRedirect = true;
        if (!auth.isAuthenticated()) {
          return null;
        }
      }

      if (menu.path === "/workshop") {
        menu.shouldNotRedirect = true;
      }

      return (
        <MenuItem
          menu={menu}
          key={"menu" + i}
          invokeAction={this.invokeAction}
        />
      );
    });
    const className = this.props.isSubMenu ? "sub-menu menu" : "menu";
    return <ul className={className}>{menus}</ul>;
  }
}

export default withRouter(Menu);
