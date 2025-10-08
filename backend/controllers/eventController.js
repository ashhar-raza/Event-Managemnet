// controllers/eventController.js
const pool = require('../config/db');
const insertRecord = require('../db/insert');
const updateRecord = require('../db/update');


exports.createEvent = async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.location || !data.start_time || !data.end_time || !data.max_capacity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await insertRecord('events', data);

    if (!result.success) throw new Error(result.error);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event_id: result.insertId
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updatedData = req.body;

    const result = await updateRecord('events', updatedData, `id = ${eventId}`);

    if (!result.success) {
      return res.status(404).json({ success: false, message: result.message });
    }

    res.json({ success: true, message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getUpcomingEvents = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT * FROM events 
      WHERE start_time >= NOW()
      ORDER BY start_time ASC
    `);

    res.json({
      success: true,
      count: rows.length,
      events: rows
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
