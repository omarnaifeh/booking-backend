const express = require('express');
const calendarController = require('../Controller/calendarController');

const router = express.Router();

router.post('/calendar', calendarController.getAllBookings);

module.exports = router;
