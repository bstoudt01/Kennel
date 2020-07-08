import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";
// Kennel returns NavBar.js & ApplicationViews.js whch were imported into kennel, imported into index.js which is where we render to the dom
const Kennel = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;