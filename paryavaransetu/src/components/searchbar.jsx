import React, { useState } from "react";

function SearchBar({onSubmit}){

    const [userInput, setUserInput] = useState("");

    const handleChange = (event) => {
        setUserInput(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(userInput);
      };

      return (
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Enter your city..."
          />
          <button className="btn search-btn" type="submit" onClick={handleSubmit}>Search</button>
        </div>
      );
}

export default SearchBar;