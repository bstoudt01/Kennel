import React from "react";
import "./Employee.css"
//img src={require...} means {} is used to wrap the source since its local... "require" is used because we are using "webpack" and it is a "commonjs" ... 
//"require" is a function that is a commonjs ?????????? and actually imports modules or other dependant files in the directory (sich as photos)
const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
          <div>
                <picture>
                    <img src={require("./brett.jpg")} alt="Employee" id="brettPhoto"/>
                </picture>
            </div>
            <h3>
            <span className="content-employeename">{props.employee.name}</span>
                <br />
                <small>{props.employee.role}</small>
            </h3>
            <button type="button" onClick={() => props.fireEmployee(props.employee.id)}>FIRE!</button>
      </div>
    </div>
  );
};

export default EmployeeCard;