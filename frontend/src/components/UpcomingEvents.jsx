import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await api.get("/events");
      setEvents(res.data.events);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-5">
      {/* Back Button aligned top-left */}
      <div className="w-full flex items-center justify-start mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition"
        >
          Back
        </button>
      </div>

      {/* Events Grid centered horizontally */}
      <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-purple-400">{event.name}</h3>
            <p className="text-gray-300">{event.location}</p>
            <p className="text-gray-400 mt-1">
              {new Date(event.start_time).toLocaleString()} -{" "}
              {new Date(event.end_time).toLocaleString()}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => navigate(`/event/${event.id}/add-attendee`)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
              >
                Add Attendee
              </button>
              <button
                onClick={() => navigate(`/event/${event.id}`)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Show Attendees
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
