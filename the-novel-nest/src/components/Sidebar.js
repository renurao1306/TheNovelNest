import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function Sidebar() {
  const sidebarStyle = {
    marginTop: '80px',
    width: '250px',
    height: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: 'transform 0.3s ease-out',
    transform: 'translateX(-250px)',
  };

  const openSidebarStyle = {
    transform: 'translateX(0)',
  };

  const menuItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={{ ...sidebarStyle, ...openSidebarStyle }}>
      <h2>Hello, User!</h2>
      <ul>
        <li style={menuItemStyle}><Link to="/cart" style={{color: '#FFF'}}>Your Cart</Link></li>
        <li style={menuItemStyle}><Link to="/orders" style={{color: '#FFF'}}>Your Orders</Link></li>
        <li style={menuItemStyle}><Link to="/register" style={{color: '#FFF'}}>Register a New User</Link></li>
        <li style={menuItemStyle}><Link to="/about" style={{color: '#FFF'}}>About Us</Link></li>
        </ul>
    </div>
  );
}

export default Sidebar;
