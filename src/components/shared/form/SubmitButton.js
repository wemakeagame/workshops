import React from "react";

export default function SubmitButton(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => props.onSubmit(props.name)}
    >
      {props.label}
    </button>
  );
}
