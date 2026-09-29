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

const RestaurantCards = ({ resDetails }) => {
  const { resName, cuisine, avgRating, delieveryTime, costfortwo, imgId } =
    resDetails;
  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ imgId} />

      <h3>{resName}</h3>
      <h4> {cuisine}</h4>
      <h4>⭐{avgRating} Stars</h4>
      <h4>
        {delieveryTime}: Mins
         {/* {costfortwo}: $ 300 */}

      </h4>
    </div>
  );
};
const restaurantsArr = [
  {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", ",", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    // costForTwo: "₹300 for two",
    imgId:
      "uvapcfajlsbctskdhuhl",
    location: "Santosh Nagar",
  },
  {
    id: "79706",
    resName: "Shah Ghouse Hotel & Restaurant",
    cuisine: ["Biryani", ",", "Chinese", ",", "Mughlai", ",", "Tandoor"],
    avgRating: 4.4,
    delieveryTime: 30,
    // costForTwo: "₹350 for two",
    imgId:
  "ggbuknqzqc4qoqfnl2cr",
    location: "Charminar",
  },
  {
    id: "45678",
    resName: "Roobaro cafe",
    cuisine: ["Beverages", ",", "Salad", ",", "Sandwhich", ",", "Desserts"],
    avgRating: "4.3",
    delieveryTime: 40,
    // costForTwo: "₹550 for two",
    imgId:
      "fcee676df41abe3fa8b474ece9d2b77d",
    location: "Saidabad",
  },

  {
  id : "23045",
  resName : "3 Chillies",
  cuisine :[ "Soups",",", "Noodles","," ,"Desserts", ",", "Moktails"],
  avgRating:"3.7",

  delieveryTime:50-60,
  // costForTwo:" $250 ",
  imgId:"a22rj7zsd7gk1vclig3q",
  location:"Banjara Hills"
  },


{
    id: "150646",
    resName: "Cream Stone Ice Cream",
    cuisine: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
    avgRating: 4.4,
    delieveryTime: 30,
    // costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
    location: "Himayath Nagar",
  },
  {
    id: "481967",
    resName: "Olio - The Wood Fired Pizzeria",
    cuisine: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Fast Food",
      "Snacks",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.1,
    delieveryTime: 51,
    // costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/d082dfab-bb70-4cc6-a96d-17e53076b8ed_481967.JPG",
    location: "Beside Metro Station",
  },
  {
    id: "481968",
    resName: "Capital Multi Cuisine Restaurant",
    cuisine: ["Haleem", "Biryani", "Kebabs"],
    avgRating: 3.8,
    delieveryTime: 35,
    // costForTwo: "₹250 for two",
    imgId: "ijy2jxi7lfwsebdtazpi",
    location: "Malakpet",
  },
  {
    id: "59643",
    resName: "Baskin Robbins - Ice Cream Desserts",
    cuisine: ["Desserts", "Ice Cream"],
    avgRating: 4.6,
    delieveryTime: 38,
    // costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/724319b2-8428-4fac-ba3c-f1bc079316ef_59643.JPG",
    location: "Redhills",
  },
  {
    id: "362596",
    resName: "Burger King",
    cuisine: ["Burgers", "American"],
    avgRating: 4.2,
    delieveryTime: 40,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/225efc0c-71fb-4e38-b12e-f2447b35e05d_362596.jpg",
    location: "Attapur",
  },
  {
    id: "23320",
    resName: "Subway",
    cuisine: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.1,
    delieveryTime: 42,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/98370ab2-9796-4cdb-baad-17dcbc75941c_23320.jpg",
    location: "Rambagh Colony",
  },
  {
    id: "118745",
    resName: "McDonald's",
    cuisine: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.2,
    delieveryTime: 37,
    // costForTwo: "₹400 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/f1b3ba9d-de39-41d9-b554-ecfdefbc9e87_118745.JPG",
    location: "Abids",
  },
  {
    id: "11091",
    resName: "Pizza Hut",
    cuisine: ["Pizzas"],
    avgRating: 4.4,
    delieveryTime: 43,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/daa9d3e6-2035-484b-a320-9fafa65faaef_11091.JPG",
    location: "Attapur",
  },
  {
    id: "175914",
    resName: "La Pino'z Pizza",
    cuisine: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.2,
    delieveryTime: 49,
    // costForTwo: "₹300 for two",
    imgId: "r1m61bi2qzphrcqzhehk",
    location: "Banjara Hills",
  },
  
{
    id: "150646",
    resName: "Cream Stone Ice Cream",
    cuisine: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
    avgRating: 4.4,
    delieveryTime: 30,
    // costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
    location: "Himayath Nagar",
  },
  {
    id: "481967",
    resName: "Olio - The Wood Fired Pizzeria",
    cuisine: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Fast Food",
      "Snacks",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.1,
    delieveryTime: 51,
    // costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/d082dfab-bb70-4cc6-a96d-17e53076b8ed_481967.JPG",
    location: "Beside Metro Station",
  },
  {
    id: "481968",
    resName: "Capital Multi Cuisine Restaurant",
    cuisine: ["Haleem", "Biryani", "Kebabs"],
    avgRating: 3.8,
    delieveryTime: 35,
    // costForTwo: "₹250 for two",
    imgId: "ijy2jxi7lfwsebdtazpi",
    location: "Malakpet",
  },
  {
    id: "59643",
    resName: "Baskin Robbins - Ice Cream Desserts",
    cuisine: ["Desserts", "Ice Cream"],
    avgRating: 4.6,
    delieveryTime: 38,
    // costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/724319b2-8428-4fac-ba3c-f1bc079316ef_59643.JPG",
    location: "Redhills",
  },
  {
    id: "362596",
    resName: "Burger King",
    cuisine: ["Burgers", "American"],
    avgRating: 4.2,
    delieveryTime: 40,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/225efc0c-71fb-4e38-b12e-f2447b35e05d_362596.jpg",
    location: "Attapur",
  },
  {
    id: "23320",
    resName: "Subway",
    cuisine: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.1,
    delieveryTime: 42,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/98370ab2-9796-4cdb-baad-17dcbc75941c_23320.jpg",
    location: "Rambagh Colony",
  },
  {
    id: "118745",
    resName: "McDonald's",
    cuisine: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.2,
    delieveryTime: 37,
    // costForTwo: "₹400 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/f1b3ba9d-de39-41d9-b554-ecfdefbc9e87_118745.JPG",
    location: "Abids",
  },
  {
    id: "11091",
    resName: "Pizza Hut",
    cuisine: ["Pizzas"],
    avgRating: 4.4,
    delieveryTime: 43,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/daa9d3e6-2035-484b-a320-9fafa65faaef_11091.JPG",
    location: "Attapur",
  },
  {
    id: "175914",
    resName: "La Pino'z Pizza",
    cuisine: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.2,
    delieveryTime: 49,
    // costForTwo: "₹300 for two",
    imgId: "r1m61bi2qzphrcqzhehk",
    location: "Banjara Hills",
  },
    {
    id: "150646",
    resName: "Cream Stone Ice Cream",
    cuisine: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
    avgRating: 4.4,
    delieveryTime: 30,
    // costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
    location: "Himayath Nagar",
  },
  {
    id: "481967",
    resName: "Olio - The Wood Fired Pizzeria",
    cuisine: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Fast Food",
      "Snacks",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.1,
    delieveryTime: 51,
    // costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/d082dfab-bb70-4cc6-a96d-17e53076b8ed_481967.JPG",
    location: "Beside Metro Station",
  },
  {
    id: "481968",
    resName: "Capital Multi Cuisine Restaurant",
    cuisine: ["Haleem", "Biryani", "Kebabs"],
    avgRating: 3.8,
    delieveryTime: 35,
    // costForTwo: "₹250 for two",
    imgId: "ijy2jxi7lfwsebdtazpi",
    location: "Malakpet",
  },
  {
    id: "59643",
    resName: "Baskin Robbins - Ice Cream Desserts",
    cuisine: ["Desserts", "Ice Cream"],
    avgRating: 4.6,
    delieveryTime: 38,
    // costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/724319b2-8428-4fac-ba3c-f1bc079316ef_59643.JPG",
    location: "Redhills",
  },
  {
    id: "362596",
    resName: "Burger King",
    cuisine: ["Burgers", "American"],
    avgRating: 4.2,
    delieveryTime: 40,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/225efc0c-71fb-4e38-b12e-f2447b35e05d_362596.jpg",
    location: "Attapur",
  },
  {
    id: "23320",
    resName: "Subway",
    cuisine: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.1,
    delieveryTime: 42,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/98370ab2-9796-4cdb-baad-17dcbc75941c_23320.jpg",
    location: "Rambagh Colony",
  },
  {
    id: "118745",
    resName: "McDonald's",
    cuisine: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.2,
    delieveryTime: 37,
    // costForTwo: "₹400 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/f1b3ba9d-de39-41d9-b554-ecfdefbc9e87_118745.JPG",
    location: "Abids",
  },
  {
    id: "11091",
    resName: "Pizza Hut",
    cuisine: ["Pizzas"],
    avgRating: 4.4,
    delieveryTime: 43,
    // costForTwo: "₹350 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/daa9d3e6-2035-484b-a320-9fafa65faaef_11091.JPG",
    location: "Attapur",
  },
  {
    id: "175914",
    resName: "La Pino'z Pizza",
    cuisine: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.2,
    delieveryTime: 49,
    // costForTwo: "₹300 for two",
    imgId: "r1m61bi2qzphrcqzhehk",
    location: "Banjara Hills",
  },
  {
    id: "77904",
    resName: "Scoops Ice Cream",
    cuisine: ["Ice Cream", "Desserts"],
    avgRating: 4.6,
    delieveryTime: 24,
    // costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/17/ba7600e2-c1f3-435e-9328-25efb5a14f32_77904.JPG",
    location: "Lal Darwaza",
  },
  {
    id: "612602",
    resName: "Kwality Walls Ice Cream and More",
    cuisine: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    avgRating: 4.6,
    delieveryTime: 31,
    // costForTwo: "₹200 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG",
    location: "Charminar",
  },
  {
    id: "118746",
    resName: "McDonald's Gourmet Burger Collection",
    cuisine: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.4,
    delieveryTime: 40,
    // costForTwo: "₹600 for two",
    imgId: "br2llzwkfsdl8f0tfuez",
    location: "Abids & Koti",
  },
  {
    id: "650819",
    resName: "Wow! Momo",
    cuisine: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
    avgRating: 4.2,
    delieveryTime: 37,
    // costForTwo: "₹500 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/24808535-67a4-4fe3-891a-03a041cf9836_650819.jpg",
    location: "Malakpet",
  },
   {
    id: "650820",
    resName: "Imperial Multicuisine Restaurant",
    cuisine: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 38,
    // costForTwo: "₹400 for two",
    imgId: "rqlwvsmzcfxbg9u6ajgm",
    location: "Redhills",
  },
  {
    id: "77905",
    resName: "Santosh Dhaba Exclusive",
    cuisine: ["Biryani", "Chinese", "Italian", "Mexican", "Desserts"],
    avgRating: 4.3,
    delieveryTime: 45,
    // costForTwo: "₹300 for two",
    imgId: "jllcesio37olflwnvter",
    location: "ABids",
  },
  {
    id: "289061",
    resName: "Istah - The Mediterranean Way",
    cuisine: [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
    ],
    avgRating: 3.8,
    delieveryTime: 43,
    // costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/4f3c4f02-b633-4afd-8ece-3f3a358741bc_289061.jpg",
    location: "Puppalaguda",
  },
  {
    id: "797153",
    resName: "Domino's Pizza",
    cuisine: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.5,
    delieveryTime: 30,
    // costForTwo: "₹400 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/c78af160-0e43-47b9-8c48-99818e5e30ac_797153.JPG",
    location: "Charminar",
  },
  {
    id: "341437",
    resName: "Onesta",
    cuisine: ["Italian", "Desserts", "Pizzas", "American", "Snacks"],
    avgRating: 3.6,
    delieveryTime: 49,
    // costForTwo: "₹200 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/c27d82ae-10e4-42df-8f2b-fa4a78f1b4a0_341437.JPG",
    location: "Banjara Hills",
  },
];





const Body = () => {
  return (
    <div className="res-container">
      <RestaurantCards resDetails={restaurantsArr[0]} />
      <RestaurantCards resDetails={restaurantsArr[1]} />
      <RestaurantCards resDetails={restaurantsArr[2]} />
      <RestaurantCards resDetails={restaurantsArr[3]} />
      <RestaurantCards resDetails={restaurantsArr[4]} />
      <RestaurantCards resDetails={restaurantsArr[5]} />
      <RestaurantCards resDetails={restaurantsArr[6]} />
      <RestaurantCards resDetails={restaurantsArr[7]} />
      <RestaurantCards resDetails={restaurantsArr[8]} />
      <RestaurantCards resDetails={restaurantsArr[9]} />
      <RestaurantCards resDetails={restaurantsArr[10]} />
      <RestaurantCards resDetails={restaurantsArr[11]} />
      <RestaurantCards resDetails={restaurantsArr[12]} />
      <RestaurantCards resDetails={restaurantsArr[13]} />
      <RestaurantCards resDetails={restaurantsArr[14]} />
      <RestaurantCards resDetails={restaurantsArr[15]} />
      <RestaurantCards resDetails={restaurantsArr[17]} />
      <RestaurantCards resDetails={restaurantsArr[18]} />
      <RestaurantCards resDetails={restaurantsArr[19]} />
      <RestaurantCards resDetails={restaurantsArr[20]} />
      <RestaurantCards resDetails={restaurantsArr[21]} />
      <RestaurantCards resDetails={restaurantsArr[22]} />
      <RestaurantCards resDetails={restaurantsArr[23]} />
      <RestaurantCards resDetails={restaurantsArr[25]} />
      <RestaurantCards resDetails={restaurantsArr[26]} />
      <RestaurantCards resDetails={restaurantsArr[27]} />
      <RestaurantCards resDetails={restaurantsArr[28]} />
      <RestaurantCards resDetails={restaurantsArr[29]} />
      <RestaurantCards resDetails={restaurantsArr[30]} />
      <RestaurantCards resDetails={restaurantsArr[31]} />
      <RestaurantCards resDetails={restaurantsArr[32]} />
      <RestaurantCards resDetails={restaurantsArr[33]} />
      <RestaurantCards resDetails={restaurantsArr[34]} />
      <RestaurantCards resDetails={restaurantsArr[35]} />
      <RestaurantCards resDetails={restaurantsArr[36]} />
      <RestaurantCards resDetails={restaurantsArr[37]} />
      <RestaurantCards resDetails={restaurantsArr[38]} />
      <RestaurantCards resDetails={restaurantsArr[39]} />
    
      
     
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <div className="logo-box">
            <span>⚡</span>
          </div>

          <h2>Swiggy</h2>

          <p>© 2026 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Swiggy Corporate</a>
          <a href="#">Careers</a>
          <a href="#">Team</a>
          <a href="#">Swiggy One</a>
          <a href="#">Swiggy Instamart</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact us</h3>

          <a href="#">Help & Support</a>
          <a href="#">Partner With Us</a>
          <a href="#">Ride With Us</a>

          <h3 className="legal-title">Legal</h3>

          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Available Cities */}
        <div className="footer-column cities">
          <h3>Available in:</h3>

          <a href="#">Bangalore</a>
          <a href="#">Gurgaon</a>
          <a href="#">Hyderabad</a>
          <a href="#">Delhi</a>
          <a href="#">Mumbai</a>
          <a href="#">Pune</a>

          <select onChange={(e) => console.log("Selected:", e.target.value)}>
            <option value="">685 cities</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
          </select>
        </div>

        {/* Life at Swiggy */}
        <div className="footer-column">
          <h3>Life at Swiggy</h3>

          <a href="#">Explore With Swiggy</a>
          <a href="#">Swiggy News</a>
          <a href="#">Snackables</a>

          {/* Social */}
          <div className="social-section">
            <h3>Social Links</h3>

            <div className="social-icons">
              <a href="#">in</a>
              <a href="#">◎</a>
              <a href="#">f</a>
              <a href="#">p</a>
              <a href="#">𝕏</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>For better experience, download the Swiggy app now</p>

        {/* <div className="app-buttons">

          <button
            className="app-button"
            onClick={() => alert("App Store clicked")}
          >
            <span className="app-icon"></span>

            <span>
              <small>Download on the</small>
              App Store
            </span>
          </button> */}

        {/* <button
            className="app-button"
            onClick={() => alert("Google Play clicked")}
          >
            <span className="play-icon">▶</span>

            <span>
              <small>GET IT ON</small>
              Google Play
            </span>
          </button> */}

        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RootLayout />);
