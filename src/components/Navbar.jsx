import { useState, useEffect } from "react";
import "../App.css"
import { NavLink } from "react-router-dom";

function Navbar() {
    /*const size = () => {
    document.querySelector(".koala").style = "transform: scale(1.75);";
  };

  const resize = () => {
    document.querySelector(".koala").style = "transform: scale(1);";
  };*/

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) { 
        setScroll(true);
      }
      else{
        setScroll(false);
      }
   });
  }, []);
  
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div onClick={scrollTop} id="Header-links" className={scroll ? "fixed-nav" : ""}>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/">Work 🖥️</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/about">About</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/creation">Creation</NavLink></li>
        <li><NavLink className={(navData) => (navData.isActive ? "active-link" : 'none')} to="/contact">Contact</NavLink></li>
        </div>
      </>
  );
}

export default Navbar;
