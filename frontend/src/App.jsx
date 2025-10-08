import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import CreateEvent from "./components/CreateEvent.jsx";
import UpcomingEvents from "./components/UpcomingEvents.jsx";
import EventDetails from "./components/EventDetails.jsx";
import AddAttendee from "./components/AddAttendee.jsx";


export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event/:id/add-attendee" element={<AddAttendee />} />
        </Routes>
      </div>
    </Router>
  );
}
