import { useState } from "react";
import "./App.css";
import "./Components/Header/Header";
import ShipsInfo from "./Components/ShipsInfo/ShipsInfo";
import Header from "./Components/Header/Header";
import {ShipsContext} from "./Components/Context/ShipsContext";

function App() {
  const lsKey = "ships";
  const [ships, setShips] = useState(
    JSON.parse(localStorage.getItem(lsKey)) || []
  );
  const [query, setQuery] = useState("");

  const save = () => {
    localStorage.setItem(lsKey, JSON.stringify(ships));
  };

  const sortedShips = ships.filter((ship) =>
    ship.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ShipsContext.Provider value={{ships, setShips, query, setQuery, save}}>
    <div className="app">
      <Header/>
      <ShipsInfo query={query} sortedShips={sortedShips} />
    </div>
    </ShipsContext.Provider>
  );
}

export default App;
