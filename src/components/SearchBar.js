import React, { useState } from "react";
import "../style.css";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery); // Trigger the callback when searching
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
