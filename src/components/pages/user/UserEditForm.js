import React from "react";
import Form from "../../shared/form/Form";
import requiredValidation from "../../shared/form/validation/required";

export default class UserEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changePassword: false,
      detailsForm: {
        username: {
          type: "text",
          label: "Username",
          value: this.props.data.username,
          validators: [requiredValidation]
        },
        name: {
          type: "text",
          label: "Name",
          value: this.props.data.name,
          validators: [requiredValidation]
        },
        surname: {
          type: "text",
          label: "Surname",
          value: this.props.data.surname,
          validators: [requiredValidation]
        },
        submitChanges: {
          type: "submit",
          label: "Save Changes",
          disabled: false
        }
      }
    };
  }

  onChange = (e, isFormValid) => {
    const detailsForm = { ...this.state.detailsForm };
    detailsForm[e.target.name].value = e.target.value;

    detailsForm.submitChanges.disabled = !isFormValid;

    this.setState({ detailsForm: detailsForm });
  };

  render() {
    return (
      <div>
        <Form
          form={this.state.detailsForm}
          onSubmit={this.props.onSubmit}
          className="compact-form panel"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
