import React, { useContext } from "react";
import { userContext } from "../../AppContext";  
import "./Availability.css";

export default function Availability() {
  const { timings } = useContext(userContext);  

  return (
    <div className="containr">
      <h3 style={{ paddingLeft: "170px" }}>Available Slots</h3>
      <ul>
        {timings.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
