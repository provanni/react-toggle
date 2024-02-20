import React, { useState } from 'react';
import './navbar.css';
import Toggle from '../toggle/toggle'; // Make sure the path matches your file structure

const Navbar = () => {
  // Default colors
  const [navbarColor, setNavbarColor] = useState('#C8A2C8');
  const [bodyColor, setBodyColor] = useState('#EFE3F4');
  const [titleColor, setTitleColor] = useState('#210924');

  const toggleColor = () => {
    if (bodyColor === '#EFE3F4') {
      // Dark colors
      setNavbarColor('#372248');
      setBodyColor('#210924'); 
      setTitleColor('#C8A2C8');
    } else {
      // Light colors
      setNavbarColor('#C8A2C8');
      setBodyColor('#EFE3F4');
      setTitleColor('#210924');
    }
  };

  // Apply the body color
  document.body.style.backgroundColor = bodyColor;

  return (
    <nav style={{ backgroundColor: navbarColor }} className='navbar'>
      <h1 style={{ color: titleColor }}>Light and Dark</h1>
      <Toggle onToggle={toggleColor} />
    </nav>
  );
};

export default Navbar;
