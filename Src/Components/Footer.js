
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
export default Footer