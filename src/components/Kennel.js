import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";
//1st component created (2nd component was animalCard, which is a module that holds jsx of html code to display a single animal)

// Kennel renders NavBar.js & ApplicationViews.js whch were imported into kennel, imported into index.js which is where we render to the dom
const Kennel = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;