import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../AppContext";  
import "./Conformation.css";

export default function Conformation() {
  const { details } = useContext(userContext);  
  const navigate = useNavigate();

  if (details.length === 0) {
    navigate("/");  
    return null;
  }
  const back=()=>{
    navigate("/")
  }

  return (
    <div className="conformation">
      <h2>Booking Confirmation</h2>
      {details.map((value, index) => (
        <div key={index} className="details">
          <p>Name: {value.name}</p>
          <p>Mobile: {value.mobile}</p>
          <p>Date: {value.date}</p>
          <p>Time: {value.time}</p>
          <p>Guests: {value.guests}</p>
          
        </div>
      ))}
      <button className="backBtn" onClick={back}>Back</button>
    </div>
  );
}
