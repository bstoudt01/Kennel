import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Kennel from "./components/Kennel";
// inokes the "router" and imports data from Kennel.js and display that to the DOM
ReactDOM.render(
  <Router>
    <Kennel />
  </Router>,
  document.getElementById("root")
);