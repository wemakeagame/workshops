import React from "react";
import Form from "../../shared/form/Form";
import emailValidation from "../../shared/form/validation/email";
import requiredValidation from "../../shared/form/validation/required";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: {
        username: {
          type: "text",
          label: "Username",
          value: "",
          validators: [requiredValidation]
        },
        email: {
          type: "text",
          label: "Email",
          value: "",
          validators: [emailValidation, requiredValidation]
        },
        name: {
          type: "text",
          label: "Name",
          value: "",
          validators: [requiredValidation]
        },
        surname: {
          type: "text",
          label: "Surname",
          value: "",
          validators: [requiredValidation]
        },
        password: {
          type: "password",
          label: "Password",
          value: "",
          validators: [requiredValidation]
        },
        repassword: {
          type: "password",
          label: "Re-type Password",
          value: "",
          validators: [requiredValidation]
        },
        submitRegister: {
          type: "submit",
          label: "Register",
          disabled: true
        }
      }
    };
  }

  onSubmit = form => {
    this.props.action("submitRegister", form);
  };

  onChange = (e, isFormValid) => {
    const registerForm = { ...this.state.registerForm };
    registerForm[e.target.name].value = e.target.value;

    registerForm.submitRegister.disabled = !isFormValid;

    this.setState({ registerForm: registerForm });
  };

  render() {
    return (
      <React.Fragment>
        <Form
          form={this.state.registerForm}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          className="compact-form panel"
        />
        <p className="error">{this.props.errorMsg}</p>
      </React.Fragment>
    );
  }
}
