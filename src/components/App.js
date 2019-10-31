import React from "react";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <RouterApp />
      </div>
    </Router>
  );
}
