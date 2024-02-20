import React from 'react';
import './toggle.css';


const Toggle = ({ onToggle }) => {
  return (
    <label className="toggle">
      <input type="checkbox" onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default Toggle;