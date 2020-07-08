import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
//only include these once they are built - previous practice exercise
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard";

// 3rd/4th componet created along with NavBar
//UI based on the route path was chosen by the user, imported into Kennel.js
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalCard />;
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationCard />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeCard />;
        }}
      />
      <Route
        path="/Owners"
        render={props => {
          return <OwnerCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;