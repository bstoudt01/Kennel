import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

//{Link} is imported to allow us access to that node module (function alias) from react-router-dom
// NavBar contains a title and an unordered list with li items containing links using "to" and "className" attributes, imported into Kennel.js
// the js files we are linking using <link> do not need to be imported instead they are called by importing {Link} and calling them using the "to" attribute
const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/locations">
              Locations
            </Link></li>
          <li>
            <Link className="nav-link" to="/employees">
              Employees
            </Link></li>
          <li>
            <Link className="nav-link" to="/owners">
              Owners
            </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;