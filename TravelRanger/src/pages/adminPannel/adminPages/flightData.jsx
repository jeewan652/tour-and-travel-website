import React, { useState } from "react";

const FlightData = () => {
  const [airline, setAirline] = useState("");
  const [number, setNumber] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [price, setPrice] = useState("");
  const [totalTime, setTotalTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      airline,
      number,
      from,
      to,
      departure,
      arrival,
      price,
      totalTime,
    };
    fetch(
      "https://tour-and-travel-f248c-default-rtdb.asia-southeast1.firebasedatabase.app/flights.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Flight Data</h1>
        <div style={{ display: " flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              gap: "3vh",
              marginLeft: "14vw",
            }}
          >
            <label htmlFor="Airline">Airline:</label>
            <label htmlFor="Number">Number:</label>
            <label htmlFor="From">From:</label>
            <label htmlFor="To">To:</label>
            <label htmlFor="Departure">Departure:</label>
            <label htmlFor="Arrival">Arrival:</label>
            <label htmlFor="Price">Price:</label>
            <label htmlFor="Total Time">Total Time:</label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              gap: "2.6vh",
              width: "40vw",
              marginLeft: "2vw",
            }}
          >
            <input
              type="text"
              id="Airline"
              name="Airline"
              value={airline}
              onChange={(e) => setAirline(e.target.value)}
            />
            <input
              type="text"
              id="Number"
              name="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              id="From"
              name="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="text"
              id="To"
              name="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              id="Departure"
              name="Departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
            <input
              type="text"
              id="Arrival"
              name="Arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
            <input
              type="text"
              id="Price"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              id="Total Time"
              name="Total Time"
              value={totalTime}
              onChange={(e) => setTotalTime(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FlightData;
