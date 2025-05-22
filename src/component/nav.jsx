import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Add useLocation

import "../style/nav.css";



function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); // Add this hook

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && menuOpen) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Reset navigation state when route changes
  useEffect(() => {
    setShowNav(true);
    setLastScrollY(0);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const closeMenu = () => {
    // Start closing animation
    setMenuClosing(true);
    // After animation completes, actually close the menu
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 500); // Match this to your animation duration
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`} ref={navRef}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="nav-logo">
            <img src="../icon/logo.svg" alt="Blender" />
          </Link>
        </div>
        {/* Hamburger Toggle */}
        <button
          className={`toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          type="button"
        >
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </button>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li className="nav-feature"><Link to="/feature">Feature</Link></li>
          <li><a href="#">Download</a></li>
          <li className="nav-support"><Link to="/support">Support</Link></li>
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
        {/* Mobile Nav */}
        <ul className={`nav-linksMobile${menuOpen ? " open" : ""}${menuClosing ? " closing" : ""}`}>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Download</a></li>
          <li><Link to="/support">Support</Link></li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Store</a></li>
          <li>
            <a className="nav-btnMobile" href="#">
              <img src="../icon/like.png" alt="Donate" />
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;