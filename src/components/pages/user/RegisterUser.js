import React from "react";
import RegisterForm from "./RegisterForm";

export default class RegisterUser extends React.Component {
  register(action, data) {}

  render() {
    return (
      <div className="login-page container page">
        <div className="panel">
          <p>Please fill all required fields in order to register</p>
          <RegisterForm action={this.register} errorMsg={this.props.errorMsg} />
        </div>
      </div>
    );
  }
}
