import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AutoCompleteSearch.css";

function AutoCompleteSearch({
  id,
  desc,
  locations = [
    "Triplicane",
    "Chromepet",
    "Pallavaram",
    "Guindy",
    "Tambaram",
    "Chetpet",
    "Adyar",
    "Anna Nagar",
    "Alwarpet",
    "T Nagar",
    "Kolathur",
    "Ambattur",
    "Perungalathur",
    "Velacherry",
    "Vadapalani",
    "Saidapet",
    "Wimco Nagar",
    "Tirusulam",
    "Washermanpet",
  ],
  getLocation,
}) {
  let [currentLocation, setCurrentLocation] = useState("");
  let [showSuggestions, setShowSuggestions] = useState(false);
  let suggestions = locations
    .filter((option) =>
      option.toLowerCase().startsWith(currentLocation.toLowerCase())
    )
    .slice(0, 5);

  let handleOnChangeEvent = function (e) {
    setCurrentLocation(() => e.target.value);
    setShowSuggestions(() => true);
    e.stopPropagation();
  };

  let handleOnClickEventOnLi = function (e) {
    setCurrentLocation(() => e.target.textContent);
    getLocation(String(e.target.textContent));
    setShowSuggestions(false);
  };

  let handleOnBlurEvent = function () {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 300);
  };

  return (
    <div className="search-bar-innerContainer">
      <label htmlFor={id}>{desc}</label>
      <input
        type="text"
        id={id}
        className="search-bar"
        value={currentLocation}
        onChange={handleOnChangeEvent}
        onBlur={handleOnBlurEvent}
      />
      {showSuggestions === true ? (
        suggestions.length > 0 ? (
          <ul>
            {suggestions.map((loco) => (
              <li
                key={uuid()}
                className="list-style"
                onClick={handleOnClickEventOnLi}
              >
                {loco}
              </li>
            ))}
          </ul>
        ) : null
      ) : null}
    </div>
  );
}

export default AutoCompleteSearch;
