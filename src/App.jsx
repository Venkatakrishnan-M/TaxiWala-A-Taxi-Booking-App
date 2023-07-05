import { useState } from "react";
import AutoCompleteSearch from "./components/AutoCompleteSearch";
import "./App.css";

function App() {
  let locations = [
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
  ];
  let [origin, setOrigin] = useState("");
  let [destination, setDestination] = useState("");
  let [carType, setCarType] = useState("");
  let [dateTime, setDateTime] = useState("");
  let [showBookingDetail, setShowBookingDetail] = useState(false);

  let onOriginChange = function (data) {
    console.log(data);
    setOrigin(() => data);
  };
  let onDestinationChange = function (data) {
    console.log(data);
    setDestination(() => data);
  };

  let onChangeHandlerOnSelect = function (e) {
    console.log(e.target.value);
    setCarType(() => parseInt(e.target.value));
  };

  let handleOnChangeEventOnDate = function (e) {
    console.log(e.target.value);
    setDateTime(() => e.target.value);
  };
  let handleOnClickEventOnButton = function (e) {
    setShowBookingDetail(() => true);
  };

  return (
    <div className="outerContainer">
      <h2>Taxiwala- A Taxi Booking App</h2>
      <div className="search-bar-outerContainer">
        <AutoCompleteSearch
          id="1"
          desc="Starting Point: "
          getLocation={onOriginChange}
        />
        <AutoCompleteSearch
          id="2"
          desc="Destination : "
          getLocation={onDestinationChange}
        />
        <div className="drop-down-container">
          <label htmlFor="dropdown">Type of car: </label>
          <select
            name="dropdown"
            id="dropdown"
            onChange={onChangeHandlerOnSelect}
          >
            <option value="" id="placeholder" selected>
              ---------------------Select---------------------
            </option>
            <option value="15">Hatchback</option>
            <option value="20">Sedan</option>
            <option value="30">SUV</option>
          </select>
        </div>
        <div className="date-time-container">
          <label htmlFor="datetime">Date and Time:</label>
          <input
            type="datetime-local"
            name="datetime"
            id="datetime"
            onChange={handleOnChangeEventOnDate}
          />
        </div>
        <button type="submit" onClick={handleOnClickEventOnButton}>
          Book
        </button>
        {showBookingDetail === true ? (
          <div className="outputHtml">
            <h3>Booking Details</h3>
            <p>PickUp Location: {origin}</p>
            <p>Drop Location: {destination}</p>
            <p>
              Total Price:
              {Math.abs(
                locations.indexOf(origin) - locations.indexOf(destination)
              ) * carType}
            </p>
            <p>Pick Up Timing: {dateTime}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
