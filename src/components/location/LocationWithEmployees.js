import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from '../../modules/LocationManager';
import EmployeeCard from '../employee/EmployeeCard';
//passes in all props from application views.
const LocationWithEmployees = props => {
    //whats the difference bt useStaet with [] and {}.. array vs function?
  const [employees, setEmployees] = useState([]);
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState([]);

  const handleDelete = (id) => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    //set isloading to true so it cant be clicked again while the new url populates
    setIsLoading(true);
    
    EmployeeManager.delete(id).then(() =>
        LocationManager.getWithEmployees(props.match.params.locationId)
        .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
        setIsLoading(false);
        })
    );
  };
  useEffect(() => {
    //got here now make call to get location with employees using embed in the api call
    // gets both employee and animal...
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      });
      setIsLoading(false);
  }, [props.match.params.locationId]);

  return (
    <div className="card">
      <p>Location: {location.name}</p>
      {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
         fireEmployee={handleDelete}
          disabled={isLoading}
          {...props}
        />
      )}
    </div>
  );
};

export default LocationWithEmployees;