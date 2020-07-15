import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";
//1st component created (2nd component was animalCard, which is a module that holds jsx of html code to display a single animal)
// Kennel renders NavBar.js & ApplicationViews.js whch were imported into kennel, imported into index.js which is where we render to the dom

const Kennel = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  //enable us to set state of current user, tell us if someone is logged in or not based on isAuthenticated having a value of session storage
  const [hasUser, setHasUser] = useState(isAuthenticated());

  //function that allows us to change what user is in our app
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
		sessionStorage.clear();
		setHasUser(isAuthenticated());
	  }
	

  return (
    <>
    {/* you can see these properties by checking props of the component.. use can utilizse them inthe component with props.hasUser."" props.setUser."" */}
      {/* to include navBar with rout to utilise clearUse then we need to export it withRouter, which gives us access to the router props (history, location, and match). */}
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;