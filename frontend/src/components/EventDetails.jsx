import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      const res = await api.get(`/events/${id}/attendees`);
      setAttendees(res.data);
    };
    fetchAttendees();
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-3xl p-5 bg-gray-800 rounded-xl shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition"
        >
          Back
        </button>

        <h2 className="text-2xl font-bold text-purple-400 mb-4">Attendees</h2>
        <ul className="divide-y divide-gray-700">
          {attendees.length === 0 && <p className="text-gray-400">No attendees yet</p>}
          {attendees.map((attendee) => (
            <li key={attendee.email} className="py-3 flex justify-between">
              <span>{attendee.name}</span>
              <span className="text-gray-400">{attendee.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
