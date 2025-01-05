import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../AppContext";  
import "./BookingForm.css";

export default function BookingForm() {
  const { details, setDetails, timings } = useContext(userContext);  
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  const lbl = useRef();

  const bookBtn = () => {
    if (Object.values(detail).length < 5) {
      lbl.current.textContent = "Fields Cannot be Blank";
      lbl.current.style.backgroundColor = "red";
      lbl.current.style.padding = "10px";
      lbl.current.style.borderRadius = "10px";
    } else if (!timings.includes(detail.time)) {
      lbl.current.textContent = "Please enter an available slot time";
      lbl.current.style.backgroundColor = "red";
      lbl.current.style.padding = "10px";
      lbl.current.style.borderRadius = "10px";
    } else {
      setDetails((prev) => [...prev, detail]);
      setDetail({});
      navigate("/conformation");
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "blue", fontSize: "30px", paddingTop: "30px" }}>
        Book the Restaurant Table
      </h1>
      <div className="table">
        <label ref={lbl}></label>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setDetail((prev) => ({ ...prev, name: e.target.value }))}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Mobile Number"
          onChange={(e) => setDetail((prev) => ({ ...prev, mobile: e.target.value }))}
        />
        <br />
        <input
          type="date"
          onChange={(e) => setDetail((prev) => ({ ...prev, date: e.target.value }))}
        />
        <br />
        <input
          type="time"
          onChange={(e) => setDetail((prev) => ({ ...prev, time: e.target.value }))}
        />
        <br />
        <input
          type="number"
          placeholder="Enter no.of guests"
          onChange={(e) => setDetail((prev) => ({ ...prev, guests: e.target.value }))}
        />
        <br />
        <button onClick={bookBtn}>Book now</button>
      </div>
    </div>
  );
}
