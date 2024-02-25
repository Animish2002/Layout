import React  from 'react';
import "./Header.css"; // Import the CSS file for the header

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
      <h1>Responsive Header</h1>
      <button className="toggle-btn" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Header;
