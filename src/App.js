import { useState } from "react";

import "./App.css";
import "./Header/Header";
import ShipsInfo from "./ShipsInfo/ShipsInfo";
import Header from "./Header/Header";

function App() {

  const lsKey = "ships";
  const [ships, setShips] = useState(JSON.parse(localStorage.getItem(lsKey))||[]);
  const [query, setQuery] = useState('');

  const save = () => {
    localStorage.setItem(lsKey, JSON.stringify(ships));
  }
  
  const sortedShips=ships.filter( ship => ship.name.toLowerCase()
    .includes(query.toLowerCase()));

  return (
    <div className="app">
       <Header
      query={query}
       setQuery={setQuery}
       setShips={setShips}
       save={save}
      />
      <ShipsInfo
        ships={sortedShips}
       //shipExist={ships.length>0}
      />
    </div>
  );
}

export default App;
