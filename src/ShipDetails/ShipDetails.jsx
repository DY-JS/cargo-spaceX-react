import React from "react";
import "./ShipDetails.scss";

const calculateBays = (str) => {
  return str
    ? Math.ceil(
        str
          .split(",")
          .map(Number)
          .reduce((s, e) => s + e) / 10
      )
    : null;
};

const ShipDetails = ({ ship }) => {
  return (
    <div className="shipDetails">
      <p className="shipDetails__name">{ship?.name}</p>
      <p className="shipDetails__email">{ship?.email}</p>
      <p className="shipDetails__bays">
        {`Number of required cargo bays ${calculateBays(ship.boxes)}`}
      </p>
      <p className="shipDetails__boxes">{ship?.boxes}</p>
    </div>
  );
};

export default ShipDetails;
