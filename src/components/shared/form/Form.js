import React from "react";
import InputText from "../../shared/form/InputText";
import SubmitButton from "./SubmitButton";

import PasswordField from "./PasswordField";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.cmpMapping = {
      text: InputText,
      submit: SubmitButton,
      password: PasswordField
    };
  }

  onChange = e => {
    const input = this.props.form[e.target.name];
    input.value = e.target.value;

    input.isValid = null;

    if (input && input.validators && input.validators.length) {
      input.validators.forEach(val => {
        if (typeof val === "function") {
          if (input.isValid) {
            let newValidation = val(input.value);
            input.isValid.valid = input.isValid.valid && newValidation.valid;
          } else {
            input.isValid = val(input.value);
          }
        }
      });
    }

    this.props.onChange(e, this.isFormValid());
  };

  onSubmit = e => {
    if (e) {
      e.preventDefault && e.preventDefault();
    }

    const formValues = {};
    Object.keys(this.props.form).forEach(key => {
      const value = this.props.form[key].value;
      if (value) {
        formValues[key] = value;
      }
    });
    this.props.onSubmit(formValues);
  };

  isFormValid = () => {
    let isValid = true;

    for (let key in this.props.form) {
      let input = this.props.form[key];
      isValid =
        isValid && ((input.isValid && input.isValid.valid) || !input.isValid);
      isValid =
        isValid &&
        ((this.isRequired(input) && input.value) || !this.isRequired(input));
    }

    return isValid;
  };

  isRequired = input => {
    return (
      input &&
      input.validators &&
      !!input.validators.find(v => v.name === "requiredValidation")
    );
  };

  render() {
    const inputs = Object.keys(this.props.form)
      .map((key, i) => {
        const input = this.props.form[key];
        const Cmp = this.cmpMapping[input.type];
        return (
          Cmp &&
          input.type && (
            <React.Fragment>
              <Cmp
                label={input.label}
                name={key}
                value={input.value}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                disabled={input.disabled}
                required={this.isRequired(input)}
                alignment={input.alignment}
                key={key + i + this.props.name}
              />
              <p className="error">{input.isValid && input.isValid.msg}</p>
              <p className="error">{input.error}</p>
            </React.Fragment>
          )
        );
      })
      .filter(i => i);
    return (
      <div className={"form " + this.props.className}>
        <form onSubmit={this.onSubmit}>{inputs}</form>
      </div>
    );
  }
}
