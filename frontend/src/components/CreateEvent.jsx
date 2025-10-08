import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function CreateEvent() {
  const navigate = useNavigate(); // for navigation
  const [form, setForm] = useState({
    name: "",
    location: "",
    start_time: "",
    end_time: "",
    max_capacity: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/events", form);
      setMessage("Event created successfully!");
      setForm({ name: "", location: "", start_time: "", end_time: "", max_capacity: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error creating event");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="w-full max-w-xl p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Create New Event</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="datetime-local"
            name="start_time"
            value={form.start_time}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="datetime-local"
            name="end_time"
            value={form.end_time}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            name="max_capacity"
            placeholder="Max Capacity"
            value={form.max_capacity}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all"
            >
              Create Event
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)} // navigate back
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition-all"
            >
              Back
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-400">{message}</p>}
      </div>
    </div>
  );
}
