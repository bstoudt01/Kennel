import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = () => {
  //The inital state of "useState" is an empty array that will be given value by the return of the fetch function
  const [employees, setEmployees] = useState([]);

  //function that returns the fetch call from the api and passes it into setEmployees as a paramater which ends up in the useState array 
  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const fireEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getAll().then(setEmployees));
  };

//useEffect takes the first render from getEmployees function (which it invokes) is the effect Callback paramater
    //@param effect — Imperative function that can return a cleanup function
// the empty array " }, []) " is the deps paramater, wihch is filled by getEmployees()
    //@param deps — If present, effect will only activate if the values in the list change.

  useEffect(() => {
    getEmployees();
  }, []);


  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} fireEmployee={fireEmployee}/>)};
    </div>
  )

};

export default EmployeeList