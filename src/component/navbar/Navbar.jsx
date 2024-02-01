import { useRef } from "react";
import "./navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logoCont">
        <img
          src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706311083/PROSIGMA/Sin-t%C3%ADtaulo-1_m2cx1z.png"
          alt="logo"
          className="logoImg"
        />
        <h3> PROSIGMA</h3>
      </div>

      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Location</a>
        <a href="#">Contact us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <IoIosCloseCircle />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBarsStaggered />
      </button>
    </header>
  );
};
