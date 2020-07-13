import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css';

const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({ name: "", role: ""})
    // add {photo: ""} to is loading useState?
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        EmployeeManager.get(props.employeeId)
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    role: employee.role                   
                })
                setIsLoading(false)
            });
    }, [props.employeeId]);

    const handleDelete = () => {
        setIsLoading(true);
        EmployeeManager.delete(props.employeeId).then(() =>
            props.history.push('/employees')
        );
    };

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require(`./brett.jpg`)} alt="Brett" id="brettPhoto" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
                <p>Role: {employee.role}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Fire
                </button>
            </div>
        </div>
    );

};

export default EmployeeDetail