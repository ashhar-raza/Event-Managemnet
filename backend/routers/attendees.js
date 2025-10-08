
const express = require('express');
const router = express.Router();
const { registerAttendee, getAttendeesByEvent } = require('../controllers/attendeeController');


router.post('/:event_id/register', registerAttendee);
router.get('/:event_id/attendees', getAttendeesByEvent);

module.exports = router;
