import logo from "../images/bird.jpg";
import "./Navbar.css";
import { FaAngleRight } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo-wrapper">
          <img src={logo} className="logo" alt="bootstrap logo" />
          <div className="navbar-title">Go head</div>
        </div>
        <div><a href="#">Themes</a>&nbsp;&gt;</div>
        <div><a href="#">Templates</a>&nbsp;&gt;</div>
        <div><a href="#">Bundles</a>&nbsp;&gt;</div>
        <div><a href="#">Forms</a>&nbsp;&gt;</div>
        <div><a href="#">Resources</a>&nbsp;&gt;</div>
      </div>
      <div className="login">
        <p>CART</p>
        <button className="login-btn">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;