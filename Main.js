import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img
            className="Symbol"
            src="https://tse1.mm.bing.net/th/id/OIP.65pfRY1UDCuVgi-IeWmZkwHaHb?r=0&pid=Api&h=220&P=0"
          />
        </div>

        <div className="Search-bar">
          <input placeholder="Search Restaurants..." />
        </div>

        <div className="Link-bar">
            <ul>
                <li> Home </li>
                <li> About-us </li>
                <li> Contact </li>
            </ul>
        </div>

        
      </div>
    </div>
  );
};


const footer =()=>{
    return(

<div className="Footer">
    

</div>



    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Header />);
