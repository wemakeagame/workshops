import React from "react";

import "./Panel.css";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: !!props.isCollapsed
    };
  }

  toggleCollapse = () => {
    if (!this.props.canCollapse) return;
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  render() {
    const collapsedClass = this.state.isCollapsed ? "collapsed" : "expanded";
    const symbolCollapse =
      (this.props.canCollapse && (this.state.isCollapsed ? "▶ " : "▽ ")) || "";
    const title = (
      <div className={"panel-title"} onClick={this.toggleCollapse}>
        {symbolCollapse + this.props.title}
      </div>
    );
    const body = !this.state.isCollapsed && (
      <div className="panel-body">{this.props.children}</div>
    );
    return (
      <div
        className={
          "panel " + (this.props.canCollapse && "collapsable ") + collapsedClass
        }
      >
        {this.props.title && title}
        {body}
      </div>
    );
  }
}
