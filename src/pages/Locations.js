import React, { useState, useEffect } from "react";
import IndividualLocation from "./IndividualLocations";
import menuData from ".././db.json";
import "./../Location.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setLocations(menuData.locations);
    document.title = "Locations - The Little Corner Cafe";
  }, []);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  return (
    <div className="locations">
      <h1>All Locations</h1>
      <label htmlFor="city">Select a city for locations in that area! :</label>
      <select id="city" onChange={handleCityChange} value={selectedCity || ""}>
        <option value="">Cities</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="San Francisco">San Francisco</option>
      </select>
      {selectedCity ? (
        <div>
          <h2>{selectedCity}</h2>
          {locations[selectedCity].map((location) => (
            <IndividualLocation
              key={location.name}
              name={location.name}
              address={location.address}
            />
          ))}
        </div>
      ) : (
        <div className="city-placeholder">
          <img
            src="https://www.christiesrealestate.com/blog/wp-content/uploads/2019/04/header-4.jpg"
            alt="City Placeholder"
          />
        </div>
      )}
    </div>
  );
};

export default Locations;
