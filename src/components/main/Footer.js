import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>Workshops Online &copy; - {new Date().getFullYear()}</footer>
    );
  }
}
