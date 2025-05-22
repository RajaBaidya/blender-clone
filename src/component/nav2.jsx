import React, { useState, useEffect } from "react";
import "../style/nav.css";

function Nav2() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const threshold = window.innerHeight;

    if (currentScrollY < threshold) {
      setShowNav(true);
    } else {
      if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on resize above mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="../icon/logo.svg" alt="logo" />
        </div>
        <button
          className="nav-hamburger"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Store</a></li>
          <li>
            <button className="nav-btn">
              <img src="../icon/like.png" alt="Donate" />
              Donate
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav2;