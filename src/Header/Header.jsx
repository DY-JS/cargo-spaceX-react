import "./Header.scss";
import cargoShips from "../cargoShips";

 const Header = ({setShips, query, setQuery, save}) => {

   return (
      <header className="header">
        <div className="header__title">Cargo Planner</div>
        <form action="#" className="header__form">
          <input
            className="header__search"
            value={query}
            placeholder="Search"
            type="search"
            onChange={(e)=>setQuery(e.target.value)}
          />
        </form>
        <div className="header__controls">
          <button
            type="button"
            name="load"
            className="header__btn"
            onClick={() => setShips(cargoShips)}
          >
            Load
          </button>
          <button
            name="save"
            className="header__btn"
            type="button"
            onClick={save}
          >
            Save
          </button>
        </div>
      </header>
  );
};

export default Header;