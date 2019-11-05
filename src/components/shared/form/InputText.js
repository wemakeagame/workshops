import React from "react";

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <div>
          <input
            type="text"
            value={this.props.value}
            onChange={e => this.props.onChange(e)}
            name={this.props.name}
          />
        </div>
      </div>
    );
  }
}
