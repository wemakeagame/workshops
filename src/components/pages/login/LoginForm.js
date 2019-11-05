import React from "react";
import Form from "../../shared/form/Form";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        username: {
          type: "text",
          label: "Username",
          value: ""
        },
        password: {
          type: "password",
          label: "Password",
          value: ""
        },
        submitLogin: {
          type: "submit",
          label: "Login"
        }
      }
    };
  }

  onSubmit = form => {
    this.props.action("submitLogin", form);
  };

  onChange = e => {
    const loginForm = { ...this.state.loginForm };
    loginForm[e.target.name].value = e.target.value;
    this.setState({ loginForm: loginForm });
  };

  render() {
    return (
      <Form
        form={this.state.loginForm}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        className="panel"
      />
    );
  }
}
