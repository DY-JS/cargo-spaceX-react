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
    : 0;
};

const ShipDetails = ({ ship }) => {
  return (
    <div className="shipDetails">
      <p className="shipDetails__name">{ship?.name}</p>
      <a
        className="shipDetails__email"
        target="_blank"
        rel="noreferrer"
        href={ship?.email}
      >
        {ship?.email}
      </a>
      <p className="shipDetails__bays">
        Number of required cargo bays
        <span>
          <b>{` ${calculateBays(ship.boxes)}`}</b>
        </span>
      </p>
      <p className="shipDetails__boxes">{ship?.boxes || "No boxes"}</p>
    </div>
  );
};

export default ShipDetails;
