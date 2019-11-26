import React from "react";

export default function SubmitButton(props) {
  return (
    <div className={props.alignment || null}>
      <button
        className="btn btn-primary"
        onClick={() => props.onSubmit(props.name)}
        disabled={props.disabled}
        type="submit"
      >
        {props.label}
      </button>{" "}
    </div>
  );
}
