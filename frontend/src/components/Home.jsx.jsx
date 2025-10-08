import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-5">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        Welcome to Event Manager
      </h1>
      <p className="text-gray-300 text-lg">
        Choose what you want to do:
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate("/create-event")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg font-semibold transition-all"
        >
          Create Event
        </button>
        <button
          onClick={() => navigate("/upcoming-events")}
          className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-lg font-semibold transition-all"
        >
          Upcoming Events
        </button>
      </div>
    </div>
  );
}
