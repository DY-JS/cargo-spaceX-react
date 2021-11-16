import React, { useState } from "react";
import {
  HashRouter as Router,
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

const ShipsInfo = ({ query, sortedShips }) => {
  const [selectedId, setSelectedId] = useState("");
  let shipForDetails = sortedShips.find((ship) => ship.id === selectedId) || null;

  if (!sortedShips.length && query.length) {
    return <p className="shipsInfo__title">No matсhes found</p>;
  }

  if (!sortedShips.length && !query.length) {
    return <p className="shipsInfo__title">Please load shipments</p>;
  }
  
  return (
    <div className="shipsInfo">
      <Router>
        <ul className="shipsInfo__list">
          {sortedShips.map((ship) => (
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
          {sortedShips.map((ship) => (
            <Route key={ship.id} path={`/${handleUrl(ship.name)}`} />
          ))}
          <Route path="*" element={() => <p>404</p>} />
        </Routes>
      </Router>
      {shipForDetails 
        ? <ShipDetails ship={shipForDetails} selectedId={selectedId}/>
        : null}
    </div>
  );
};

export default ShipsInfo;
