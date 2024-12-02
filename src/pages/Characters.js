import React from "react";
import '../style.css';
import bardock from '../images/bardock-icon.png';

const Characters = () => {
  return (
    <div>
      <h1>Characters Page</h1>
      <p>Here are the characters!</p>
      <img src={bardock} alt="bardock" className="bardock" />
    </div>
  );
};

export default Characters;
