import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div className="login-page container page">
        <div className="panel">
          <p>
            Add your credentials to login or <i>Register here</i>
          </p>
          <LoginForm action={this.props.action} />
          <p className="error">{this.props.errorMsg}</p>
        </div>
      </div>
    );
  }
}

export default Login;
