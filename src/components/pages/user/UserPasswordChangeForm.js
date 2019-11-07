import React from "react";
import Form from "../../shared/form/Form";
import requiredValidation from "../../shared/form/validation/required";

export default class UserPasswordChangeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changePassword: false,
      passwordForm: {
        oldPassword: {
          type: "password",
          label: "Old Password",
          value: "",
          validators: [requiredValidation]
        },
        newPassword: {
          type: "password",
          label: "New Password",
          value: "",
          validators: [requiredValidation]
        },
        reNewpassword: {
          type: "password",
          label: "Re-type New Password",
          value: "",
          validators: [requiredValidation]
        },
        submitPasswordChange: {
          type: "submit",
          label: "Change Password",
          disabled: true
        }
      }
    };
  }

  onChange = (e, isFormValid) => {
    const passwordForm = { ...this.state.passwordForm };
    passwordForm[e.target.name].value = e.target.value;

    passwordForm.submitPasswordChange.disabled = !isFormValid;

    this.setState({ passwordForm: passwordForm });

    if (passwordForm.newPassword.value !== passwordForm.reNewpassword.value) {
      passwordForm.reNewpassword.error = "Password not matching!";
    } else {
      passwordForm.reNewpassword.error = "";
    }
  };

  render() {
    return (
      <div>
        <Form
          form={this.state.passwordForm}
          onSubmit={this.props.onSubmit}
          onChange={this.onChange}
          className="compact-form panel"
        />
      </div>
    );
  }
}
