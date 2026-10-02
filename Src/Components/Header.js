import { baseURL } from "../Utils/Contants";


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img
            className="Symbol"
            src= {baseURL}
          />
        </div>

        <div className="Search-bar">
          <input placeholder="Search Restaurants and food..." />
          <span className="search-logo">🔍︎</span>
        </div>

        <div className="Link-bar">
          <ul>
            <li> Home </li>
            <li> About-us </li>
            <li> Contact </li>
            <li>Carts</li>
            {/* <li>Sign-in</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header