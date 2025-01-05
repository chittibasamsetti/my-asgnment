import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userContext } from "./AppContext";  
import BookingForm from "./components/BookingForm/BookingForm";
import Conformation from "./components/Conformation/Conformation";
import Availability from "./components/Availability/Availability";

export default function App() {
  const [details, setDetails] = useState([]);
  const timings = ["11:00", "12:00", "1:00", "2:00", "3:00", "7:00", "8:00", "9:00", "10:00"];

  return (
    <userContext.Provider value={{ details, setDetails, timings }}>
      <Router basename="/my-asgnment"> {/* Set basename for GitHub Pages */}
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <BookingForm />
                <Availability />
              </div>
            }
          />
          <Route path="/conformation" element={<Conformation />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}
