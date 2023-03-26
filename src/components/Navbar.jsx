import "../App.css"
import { NavLink } from "react-router-dom";

function Navbar() {
    const size = () => {
    document.querySelector(".koala").style = "transform: scale(1.75);";
  };

  const resize = () => {
    document.querySelector(".koala").style = "transform: scale(1);";
  };

  return (
    <>
      <NavLink className="koala-Wrap" to="/">
          <img
          className="koala"
          onMouseEnter={size}
          onMouseLeave={resize}
          src="/images/koala.png"
          alt="koala"
         />
      </NavLink>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/">Work</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/about">About</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/creation">Creation</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/contact">Contact</NavLink></li>
      </>
  );
}

export default Navbar;
