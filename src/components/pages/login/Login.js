import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login-page container page">
        <div className="panel">
          <p>
            Add your credentials to login or{" "}
            <Link to="/user/add"> Register </Link>
          </p>
          <LoginForm action={this.props.action} />
          <p className="error">{this.props.errorMsg}</p>
        </div>
      </div>
    );
  }
}

export default Login;
