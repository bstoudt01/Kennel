import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css"
//2nd component created (owner, employee, location componentes also created in this step)
// now those get called in navbar and and rendered in applicationview
    //Application view is now the 3rd component created
//button contains an annonymus function that takes the deleteAnimal function and passed through the animal id when the button is clicked and then the delete function returns the new array of animals
const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          <img src={require(`${props.animal.photo}`)} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {props.animal.name}
        </span></h3>
        <p>Breed: {props.animal.breed}</p>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
      </div>
    </div>
  );
}

export default AnimalCard;