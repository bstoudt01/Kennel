import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

//passes in all props from application views.
const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const handleDelete = (id) => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    //set isloading to true so it cant be clicked again while the new url populates
    setIsLoading(true);
    
    AnimalManager.delete(id).then(() =>
      props.history.push("/employees")
    );
  };
  useEffect(() => {
    //got here now make call to get employee with animal
    // gets both employee and animal...
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
      setIsLoading(false);
  }, [props.match.params.employeeId]);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={handleDelete}
          disabled={isLoading}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;