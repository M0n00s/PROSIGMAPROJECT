import { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  //ocultar menu mobile  cuando hace scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // fin

  //menu change color on scroll
  const [colorBgNav, setColorBgNav] = useState(false);
  const changeBgColor = () => {
    if (window.scrollY > 70) {
      setColorBgNav(true);
    } else {
      setColorBgNav(false);
    }
  };
  window.addEventListener("scroll", changeBgColor);
  //END: menu change color on scroll

  const handleScroll = () => {
    setShowMenu(false);
  };

  return (
    <header className={colorBgNav ? "headerBackground" : ""}>
      <div className="logoCont">
        <img
          src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706311083/PROSIGMA/Sin-t%C3%ADtaulo-1_m2cx1z.png"
          alt="logo"
          className="logoImg"
        />
        <h3> PROSIGMA</h3>
      </div>

      <nav className={showMenu ? "responsive_nav" : ""}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#location">Locations</a>
        <a href="#contact">Contact us</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={() => setShowMenu(false)}
        >
          <IoIosCloseCircle />
        </button>
      </nav>
      <button className="nav-btn" onClick={() => setShowMenu(true)}>
        <FaBarsStaggered />
      </button>
    </header>
  );
};
