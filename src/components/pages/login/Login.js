import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import "./Login.css";
import Page from "../../shared/Page";
import Panel from "../../shared/Panel";

class Login extends React.Component {
  render() {
    return (
      <Page className="login-page">
        <h3>Login</h3>
        <p className="text-center">
          Add your credentials to login or{" "}
          <Link to="/user/add"> Register </Link>
        </p>
        <LoginForm action={this.props.action} />
        <p className="error">{this.props.errorMsg}</p>
      </Page>
    );
  }
}

export default Login;
