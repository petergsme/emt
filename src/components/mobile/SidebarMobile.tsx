import React from "react";
// import { FaTimes } from "react-icons/fa";
import "./SidebarMobile.css";

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Hide the sidebar if it's closed
  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={onClose} className="close-button" aria-label="Close sidebar">
            {/* <FaTimes /> */}
          </button>
        </div>

        <div className="lists-container">
          <div className="list-section">
            <h4>Mapa</h4>
          </div>

          <div className="list-section">
            <h4>Tarjetas</h4>
          </div>

          <div className="list-section">
            <h4>Ayuda</h4>
            {/* here list already visited */}
          </div>

          <button className="contact-button">Contacta</button>
          <button className="download-app">Descarga la app</button>
        </div>
      </aside>
    </>
  );
};
export default SidebarMobile;
