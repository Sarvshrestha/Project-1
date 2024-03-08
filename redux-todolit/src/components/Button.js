
import React from 'react';
import '../App.css';
const Button = ({ onClick, children }) => {
    return (
      <button className="large-button"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button;