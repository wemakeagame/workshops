import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default class MenuItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menu: props.menu,
      isHovering: false
    };
    this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler.bind(this);
  }

  mouseEnterHandler = event => {
    event.preventDefault();
    this.setState({ isHovering: true });
  };

  mouseLeaveHandler = event => {
    event.preventDefault();
    this.setState({ isHovering: false });
  };

  render() {
    let link = !this.state.menu.shouldNotRedirect ? (
      <Link to={this.state.menu.path}>{this.state.menu.description}</Link>
    ) : (
      <span>{this.state.menu.description}</span>
    );

    if (this.state.menu.children) {
      link = (
        <React.Fragment>
          {link}
          <Menu menus={this.state.menu.children} isSubMenu={true} />
        </React.Fragment>
      );
    }

    if (this.state.menu.action) {
      link = (
        <button
          onClick={() => this.props.invokeAction(this.state.menu.action)}
          className="btn btn-link"
        >
          {this.state.menu.description}
        </button>
      );
    }

    return (
      <li
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
        className={
          "menu-item " +
          (this.state.menu.customClass || "") +
          " " +
          (this.state.isHovering ? "hovering" : "")
        }
      >
        {link}
      </li>
    );
  }
}
