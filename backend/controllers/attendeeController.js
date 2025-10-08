const pool = require('../config/db');
const insertRecord = require('../db/insert');

exports.registerAttendee = async (req, res) => {
  const { event_id } = req.params;
  const { name, email } = req.body;

  try {
    // Check if event exists
    const [events] = await pool.query('SELECT * FROM events WHERE id = ?', [event_id]);
    if (events.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const event = events[0];

    // Check if attendee already registered
    const [existing] = await pool.query(
      'SELECT * FROM attendee WHERE email = ? AND event_id = ?',
      [email, event_id]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Attendee already registered for this event' });
    }

    // Check event capacity
    const [attendees] = await pool.query(
      'SELECT COUNT(*) AS count FROM attendee WHERE event_id = ?',
      [event_id]
    );
    if (attendees[0].count >= event.max_capacity) {
      return res.status(400).json({ message: 'Event is already full' });
    }

    // Insert attendee
    const data = { name, email, event_id };
    const result = await insertRecord('attendee', data);

    if (result.success) {
      return res.status(201).json({ message: 'Attendee registered successfully', id: result.insertId });
    } else {
      return res.status(500).json({ message: 'Failed to register attendee', error: result.error });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAttendeesByEvent = async (req, res) => {
  const { event_id } = req.params;

  try {
    const [attendees] = await pool.query(
      'SELECT name, email FROM attendee WHERE event_id = ?',
      [event_id]
    );

    return res.status(200).json(attendees);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
