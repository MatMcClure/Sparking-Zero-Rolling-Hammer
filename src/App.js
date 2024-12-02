import React, { useState } from "react";
import './style.css';
import logo from './images/sparking-banner.png';
import SearchBar from './components/SearchBar'; 
import Characters from "./pages/Characters";

function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const [currentPage, setCurrentPage] = useState("home"); // Manage the current page state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const gotoPage = (page) => {
    setCurrentPage(page); // Update the current page
    setIsDropdownOpen(false); // Close dropdown when a page is selected
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="Logo" />
        <button className="dropdown-button" onClick={toggleDropdown}>
          Home
        </button>

        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <button onClick={() => gotoPage("characters")}>Characters</button>
            </li>
            <li>
              <button onClick={() => gotoPage("rolling-hammers")}>Rolling Hammers</button>
            </li>
            <li>
              <button onClick={() => gotoPage("advanced-combos")}>Advanced Combos</button>
            </li>
          </ul>
        )}
        {currentPage === "home" && (
          <SearchBar onSearch={handleSearch} />
        )}
        {currentPage === "characters" && <Characters />}
      </header>
    </div>
  );
}

export default App;
