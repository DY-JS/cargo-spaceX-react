import React from "react";
import "./ShipItem.scss";

const ShipItem = ({ ship, setSelectedId }) => {
  return (
    <li
      className="shipItem"
      key={ship.id}
      onClick={() => setSelectedId(ship.id)} //при клике всё пропадает!
    >
      {ship.name}
    </li>
  );
};

export default ShipItem;
