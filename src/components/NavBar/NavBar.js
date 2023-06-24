import "./NavBar.css";
import Logo from "../../assets/images/Logo.png";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div style={{ position: "relative" }}>
          <img src={Logo} alt="Logo" className="logo1" />
        </div>
        <div className="nav-menu">
          <div>About</div>
          <div>Pricing</div>
          <div>Contact Us</div>
          <div>Login</div>
          <button className="nav-button">Start free trial</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
