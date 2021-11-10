import React, { useState } from "react";
import ShipItem from "../ShipItem/ShipItem";
import ShipDetails from "../ShipDetails/ShipDetails";
import "./ShipsInfo.scss";

const ShipsInfo = ({ ships }) => {
  const [selectedId, setSelectedId] = useState("");
  //const [shipForDetails, setShipForDetails] = useState();

  let shipForDetails = ships.find(ship => ship.id === selectedId)||null;
  //!shipExist ? - для основного массива не работает
  return !ships.length ? (
    <p className="shipsInfo__title">Please load shipments</p>
  ) : (
    
    <div className="shipsInfo">
       {selectedId}
      {shipForDetails}
      <ul className="shipsInfo__list">
        {ships.map((ship) => (
          <ShipItem ship={ship}  //ошибка ключей?? но они есть! при клике всё пропадает!
           setSelectedId={setSelectedId}
          />
        ))}
      </ul>
      {selectedId!==""
      ? <ShipDetails ship={shipForDetails} />
      : null
      }
    </div>
  );
};

export default ShipsInfo;
