import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function AddAttendee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/events/${id}/register`, form);
            setMessage("Attendee added successfully!");
            setForm({ name: "", email: "" });
        } catch (err) {
            setMessage(err.response?.data?.message || "Error adding attendee");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-xl p-8 bg-gray-800 rounded-xl shadow-lg">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition"
                >
                    Back
                </button>

                <h2 className="text-2xl font-bold mb-6 text-green-400">Add Attendee</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Attendee Name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Attendee Email"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                    >
                        Add Attendee
                    </button>
                </form>
                {message && <p className="mt-4 text-green-400">{message}</p>}
            </div>
        </div>

    );
}
