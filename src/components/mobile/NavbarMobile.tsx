import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const NavbarMobile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
  );
};

export default NavbarMobile;
