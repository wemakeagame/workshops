import React from "react";
import Form from "../../shared/form/Form";
import requiredValidation from "../../shared/form/validation/required";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        username: {
          type: "text",
          label: "Username",
          value: "",
          validators: [requiredValidation]
        },
        password: {
          type: "password",
          label: "Password",
          value: "",
          validators: [requiredValidation]
        },
        submitLogin: {
          type: "submit",
          label: "Login",
          disabled: true,
          alignment: "text-center"
        }
      }
    };
  }

  onSubmit = form => {
    this.props.action("submitLogin", form);
  };

  onChange = (e, isFormValid) => {
    const loginForm = { ...this.state.loginForm };
    loginForm[e.target.name].value = e.target.value;
    loginForm.submitLogin.disabled = !isFormValid;
    this.setState({ loginForm: loginForm });
  };

  render() {
    return (
      <Form
        form={this.state.loginForm}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        className="panel"
        name="login-form"
      />
    );
  }
}
