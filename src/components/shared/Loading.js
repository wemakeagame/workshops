import React from "react";
import "./Loading.css";

export default function Loading(props) {
  return (
    <div className="loading">
      <div className="loader" />
      <p className="text-center">{props.loadingMsg || "Loading..."}</p>
    </div>
  );
}
