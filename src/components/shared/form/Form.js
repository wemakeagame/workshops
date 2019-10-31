import React from "react";
import InputText from "../../shared/form/InputText";
import SubmitButton from "./SubmitButton";

import "./Form.css";
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
    this.props.onChange(e);
  };

  onSubmit = () => {
    const formValues = {};
    Object.keys(this.props.form).forEach(key => {
      const value = this.props.form[key].value;
      if (value) {
        formValues[key] = value;
      }
    });
    this.props.onSubmit(formValues);
  };

  render() {
    const inputs = Object.keys(this.props.form)
      .map(key => {
        const input = this.props.form[key];
        const Cmp = this.cmpMapping[input.type];
        return (
          Cmp &&
          input.type && (
            <Cmp
              label={input.label}
              name={key}
              value={input.value}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              key={key}
            />
          )
        );
      })
      .filter(i => i);

    return <div className="form">{inputs}</div>;
  }
}
