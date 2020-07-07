import React from "react";
import AnimalCard from "./animal/AnimalCard";
import AddressCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard";
import "./Kennel.css";

const Kennel = () => {
  return (
    <div>
        <div className="container-cards">
            <EmployeeCard />
            <AddressCard />
        </div>
        <div className="container-cards">
            <AnimalCard />
            <OwnerCard />
        </div>
    </div>
  );
};

export default Kennel;