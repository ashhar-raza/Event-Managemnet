// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const { createEvent, getUpcomingEvents, updateEvent } = require('../controllers/eventController');
const { registerAttendee, getAttendeesByEvent } = require('../controllers/attendeeController');

router.post('/', createEvent);      
router.get('/', getUpcomingEvents); 
router.put('/:id', updateEvent);    



router.post('/:event_id/register', registerAttendee);
router.get('/:event_id/attendees', getAttendeesByEvent);

module.exports = router;
