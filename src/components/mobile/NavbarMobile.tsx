import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SidebarMobile from "./SidebarMobile";
import "./NavbarMobile.css";

const NavbarMobile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="nav-items">
        <Link to="/" className="logo">
          <img
            src="/emt.png"
            alt="EMT Logo"
            className="logo-img"
            style={{ height: "20px" }}
          />
        </Link>
        <button onClick={toggleSidebar} className="menu-toggle">
          <FaBars />
        </button>
      </nav>
      <SidebarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default NavbarMobile;
