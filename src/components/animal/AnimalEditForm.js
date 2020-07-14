import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalEditForm = props => {
  //include employeeId as a paramater to expect in the state
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId:"", photo: ""});
  const [isLoading, setIsLoading] = useState(false);
  //declare a variable to handle the employees
  const [employees, setEmployees] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the employeeId here as well as our state
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      photo: animal.photo,
      employeeId: parseInt(animal.employeeId)
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }
  // gets animals, but also needs to get employees
  useEffect(() => {
    // get 1 single animal
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
        // then when we have the single animal, we need the employees
          EmployeeManager.getAll()
          // then we have our employees list
          .then(employees => {
            //then we set our employees, animals, and change setisLoading for these useStates
            setEmployees(employees)
            setAnimal(animal);
            setIsLoading(false);    
          })
      });
  }, [props.match.params.animalId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select
              className="form-control"
              //reference
              id="employeeId"
              // whatever comes back from animal property employeeId
              value={animal.employeeId}
              onChange={handleFieldChange}
            >
              {employees.map(employee =>
              //set a unique value as a key and then give the value of employee.id as a string (we added to editedAnimal with parseInt) and show the employee.name
              <option key={employee.id} value={employee.id}>
              {employee.name}
              </option>
              )}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm