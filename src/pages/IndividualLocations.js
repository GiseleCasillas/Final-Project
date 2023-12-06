import React from "react";

const IndividualLocation = ({ name, address }) => {
  return (
    <div className="individual-location">
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
};

export default IndividualLocation;
