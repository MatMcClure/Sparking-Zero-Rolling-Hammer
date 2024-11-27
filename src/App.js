
import React, { useState } from "react";
import './style.css';
import logo from './images/sparking-banner.png';
import SearchBar from './components/SearchBar';

function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Logo" className='Logo'/>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Home
      </button>
      {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>Characters</li>
              <li>Rolling Hammers</li>
              <li>Advanced Combos</li>
            </ul>
          )}
      <h1>Search Feature</h1>
      <SearchBar onSearch={handleSearch} />
      </header>
    </div>
  );
}

export default App;
