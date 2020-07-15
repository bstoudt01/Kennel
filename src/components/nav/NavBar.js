import React from "react";
import { Link , withRouter} from "react-router-dom";
import "./NavBar.css";

//added withRouter to suport clearUser
//{Link} is imported to allow us access to that node module (function alias) from react-router-dom
// NavBar contains a title and an unordered list with li items containing links using "to" and "className" attributes, imported into Kennel.js
// the js files we are linking using <link> do not need to be imported instead they are called by importing {Link} and calling them using the "to" attribute

const NavBar = props => {
  // handleLogout added to handle the clearUser function (change session storage) that was passed in from parent kennel.js so it can be passed down to navBar childern.. and then redirect us to the home url
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
      {/* everyone can see home, so there is no terinary on that link */}
        <ul className="container">
          <li>
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          {/* if the props.hasUse is true, it will display animals link on navBar, if not, null (wont display link on nav bar) */}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/animals"> Animals </Link>
              </li>
            : null}
          <li>
            <Link className="nav-link" to="/locations"> Locations </Link>
          </li>
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/employees"> Employees </Link>
              </li>
            : null}
          {props.hasUser
            ? <li>
                <Link className="nav-link" to="/owners"> Owners </Link>
              </li>
            : null}
            {/* if  props.hasUser NOT True, then show them login link, if props.hasUse NOT false then dont show them login link*/}

            {/* new login/logout redirect based on user status */}
            {props.hasUser
            ? <li>
                {/* did not want to change url, so we called a functionality, className  is same so they looks similar stylistically on the screen */}
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>
            : <li>
            {/* link is taking us to place, the url is changing */}
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

// method withRouter which gives us access to the router props is imported to give us (history, location, and match) with the NavBar passed through and exported with that data as well
export default withRouter(NavBar);