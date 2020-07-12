import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from "./owner/OwnerForm";


// 3rd/4th componet created along with NavBar
//renders routes based on the URL.
//UI based on the route path was chosen by the user, imported into Kennel.js
const ApplicationViews = () => {
	return (
    
		<React.Fragment>
			{/* Make sure you add the `exact` attribute here  and pass through ...props so animal list can accept a paramater of props to use later in the code (for adding a new animal) */}
			<Route exact path="/animals" render={(props) => {
				return <AnimalList {...props} />
			}} />
			<Route path="/animals/:animalId(\d+)" render={(props) => {
			// Pass the animalId to the AnimalDetailComponent
				return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props}/>
			}} />
			<Route path="/animals/new" render={(props) => {
				return <AnimalForm {...props} />
			}} />
			{/*
			This is a new route to handle a URL with the following pattern:
			http://localhost:3000/animals/1

			It will not handle the following URL because the `(\d+)`
			matches only numbers after the final slash in the URL
			http://localhost:3000/animals/jack
			*/}
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
					return <LocationList {...props} />;
				}}
			/>
			<Route
				path="/locations/:locationId(\d+)" render={(props) => {
					return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props}/>
				}}
			/>
			<Route path="/locations/new" render= {(props) => {
				return <LocationForm {...props} />
			}}
			/>
			<Route
				exact
				path="/employees"
				render={(props) => {
					return <EmployeeList {...props} />;
				}}
			/>
			<Route
				path="/employees/:employeeId(\d+)" render={(props) => {
					return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}{...props}/>
				}} 
			/>
			<Route path="/employees/new" render={(props) => {
				return <EmployeeForm {...props} />
			}} />

			<Route
				exact
				path="/owners"
				render={(props) => {
					return <OwnerList {...props} />;
				}}
			/>
			<Route path="/owners/:ownerId(\d+)" render={(props) => {
				return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
			}}/>
			<Route path="/owners/new" render={(props) => {
				return <OwnerForm {...props} />
			}}/>
		</React.Fragment>
	);
};

export default ApplicationViews;