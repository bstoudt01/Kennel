import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import Login from "./auth/Login";

// 3rd/4th componet created along with NavBar
//renders routes based on the URL.
//UI based on the route path was chosen by the user, imported into Kennel.js

// render pass in props
// component pass in function
const ApplicationViews = () => {
	// Check if credentials are in session storage returns true/false (credentials are there or its not)
	const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
	return (
		<React.Fragment>
			{/* Make sure you add the `exact` attribute here  and pass through ...props so animal list can accept a paramater of props to use later in the code (for adding a new animal) */}
			
			
			<Route exact path="/animals" render={props => {
				if (isAuthenticated()) {
					return <AnimalList {...props} />
				} else {
					return <Redirect to="/login" />
				}
			}} />
			
			<Route exact path="/animals/:animalId(\d+)" render={(props) => {
				 
			// Pass the animalId to the AnimalDetailComponent
			// without exact it would try to render both the edit form and details card
				return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props}/>
			}} />

			<Route path="/animals/new" render={(props) => {
				return <AnimalForm {...props} />
			}} />

			{/* colon ":" lets route know its a dynamic path and (\d+) lets it know to only look at integer of id passed in */}
			<Route path="/animals/:animalId(\d+)/edit" render={props => {
			if (isAuthenticated()) {
				return <AnimalEditForm {...props} />
			} else {
				return <Redirect to="/login" />
			}
			}} />

			{/*
			This is a new route to handle a URL with the following pattern:
			http://localhost:3000/animals/1

			It will not handle the following URL because the `(\d+)`
			matches only numbers after the final slash in the URL
			http://localhost:3000/animals/jack
			*/}
			<Route path="/login" component={Login} />

			<Route
				exact
				path="/"
				render={props => {
					return <Home />;
				}}
			/>

			<Route
				exact
				path="/locations"
				render={(props) => {
					if (isAuthenticated()) {
					return <LocationList {...props} />
				} else {
					return <Redirect to="/login" />
				}
				}}
			/>
			<Route
				exact path="/locations/:locationId(\d+)" render={(props) => {
					// if (LocationManager.get(id) !== props.locationid) {
					//  return <Redirect to="/" />
					// } else {
						return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props}/>
					// }
				}}
			/>

			<Route path="/locations/:locationId(\d+)/edit" render={(props) => {
				if (isAuthenticated()) {
					return <LocationEditForm {...props} />
				} else {
					return <Redirect to="/login" />
				}
			}} />

			<Route path="/locations/new" render= {(props) => {
				return <LocationForm {...props} />
			}}
			/>

			<Route
				exact
				path="/employees"
				render={(props) => {
					if (isAuthenticated()) {
					return <EmployeeList {...props} />
				} else {
					return <Redirect to="/login" />
				}
				}}
			/>
			
			<Route
				exact path="/employees/:employeeId(\d+)" render={(props) => {
					return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
				}} 
			/>
			
			<Route path="/employees/new" render={(props) => {
				return <EmployeeForm {...props} />
			}} />
			
			<Route path="/employees/:employeeId(\d+)/edit" render={props => {
				if (isAuthenticated()) {
					return <EmployeeEditForm {...props} />
				} else {
					return <Redirect to="/login" />
				}
			}} />
			
			<Route
				exact
				path="/owners"
				render={(props) => {
					if (isAuthenticated()) {
					return <OwnerList {...props} />
				} else {
					return <Redirect to="/login" />
				}
				}}
			/>

			<Route exact path="/owners/:ownerId(\d+)" render={(props) => {
				return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
			}}/>
			
			<Route path="/owners/new" render={(props) => {
				return <OwnerForm {...props} />
			}}/>
			
			<Route path="/owners/:ownerId(\d+)/edit" render={props => {
			if (isAuthenticated()) {
				return <OwnerEditForm {...props} />
			} else {
				return <Redirect to="/login" />
			}
			}} />
			
		</React.Fragment>
	);
};

export default ApplicationViews;