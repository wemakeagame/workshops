import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Workshops Online &copy; - {new Date().getFullYear()}</p>
      </footer>
    );
  }
}
