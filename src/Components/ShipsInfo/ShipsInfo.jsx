import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";
import ShipDetails from "../ShipDetails/ShipDetails";
import "./ShipsInfo.scss";

const handleUrl = (name) => {
  const res = name.toLowerCase().split("");
  return res
    .map((char) => {
      return char === " " ? "-" : char;
    })
    .join("");
};

const ShipsInfo = ({ query, ships }) => {
  const [selectedId, setSelectedId] = useState("");
  let shipForDetails = ships.find((ship) => ship.id === selectedId) || null;

  if (!ships.length && query.length) {
    return <p className="shipsInfo__title">No matсhes found</p>;
  }

  if (!ships.length && !query.length) {
    return <p className="shipsInfo__title">Please load shipments</p>;
  }
  return (
    <div className="shipsInfo">
      <Router>
        <ul className="shipsInfo__list">
          {ships.map((ship) => (
            <li
              key={ship.id}
              className="shipsInfo__link"
              onClick={() => {
                setSelectedId(ship.id);
              }}
            >
              <NavLink to={`/${handleUrl(ship.name)}`}>{ship.name}</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          {ships.map((ship) => (
            <Route key={ship.id} path={`/${handleUrl(ship.name)}`} />
          ))}
          <Route path="*" element={() => <p>404</p>} />
        </Routes>
      </Router>
      {shipForDetails ? <ShipDetails ship={shipForDetails} /> : null}
    </div>
  );
};

export default ShipsInfo;
