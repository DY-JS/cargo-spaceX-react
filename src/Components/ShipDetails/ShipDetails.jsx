import React, { useState, useContext } from "react";
import { ShipsContext } from "../Context/ShipsContext";
import "./ShipDetails.scss";
import pencil from "./pencil.svg";

const calculateBays = (str) => {
  if(str) {
  let res = Math.ceil(
    str
      .split(",")
      .map(Number)
      .reduce((s, e) => s + e) / 10
  );
  return isNaN(res) ? 0 : res;
  }
  return 0;
};

const ShipDetails = ({ ship, selectedId }) => {
  const { setShips } = useContext(ShipsContext);

  const [editMode, setEditMode] = useState(false);
  const [newQuantity, setNewQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShips((currentShips) =>
      currentShips.map((ship) => {
        if (ship.id === selectedId ) {
          return {
            ...ship,
            boxes: newQuantity,
          };
        }
        return ship;
      })
    );
    setNewQuantity("");
    setEditMode(false);
  };

  return (
    <div className="shipDetails">
      <p className="shipDetails__name">{ship?.name}</p>
      <a
        className="shipDetails__email"
        target="_blank"
        rel="noreferrer"
        href={`mailto:${ship?.email}`}
      >
        {ship?.email}
      </a>
      <p className="shipDetails__bays">
        Number of required cargo bays
        <span>
          <b>{` ${calculateBays(ship.boxes)}`}</b>
        </span>
      </p>
      <p>Cargo Boxes</p>
      <form
        type="submit"
        className={editMode ? "shipDetails__form" : "shipDetails__hide"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={editMode ? "shipDetails__input" : "shipDetails__hide"}
          placeholder="Enter quantity of boxes" 
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
         
        />
        <button type="submit" className="shipDetails__btn">
          Confirm
        </button>
      </form>
      <div className={!editMode ? "shipDetails__boxes" : "shipDetails__hide"}>
        {ship?.boxes || "No boxes"}
        <img
          className={!editMode ? "shipDetails__icon" : "shipDetails__hide"}
          src={pencil}
          alt="edit"
          title="Edit boxes"
          onClick={() => setEditMode(true)}
        />
      </div>
    </div>
  );
};

export default ShipDetails;

