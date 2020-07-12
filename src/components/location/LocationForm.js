import React, {useState} from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css';

const LocationFrom = (props) => {
    const [location, setLocation] = useState({name: "", address: "", photo: "./Downtown.jpg"})
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    }

    const constructNewLocation = evt => {
        evt.preventDefault();
        if (location.name === "" || location.address === "" ) {
            window.alert("Please input location name & address");
        } else {
            setIsLoading(true);
            LocationManager.post(location)
                .then(() => props.history.push("/locations"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required onChange={handleFieldChange} id="name" placeholder="Location Name" />
                        <label htmlFor="name">Name</label>
                        <input type="text" required onChange={handleFieldChange} id="address" placeholder="Location Address" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={isLoading} onClick={constructNewLocation}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default LocationFrom;