import { useState } from "react";
import "./App.css";
import "./Components/Header/Header";
import ShipsInfo from "./Components/ShipsInfo/ShipsInfo";
import Header from "./Components/Header/Header";

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
    <div className="app">
      <Header
        ships={ships}
        query={query}
        setQuery={setQuery}
        setShips={setShips}
        save={save}
      />
      <ShipsInfo query={query} ships={sortedShips} />
    </div>
  );
}

export default App;
