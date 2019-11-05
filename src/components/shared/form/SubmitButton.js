import React from "react";

export default function SubmitButton(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => props.onSubmit(props.name)}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}
