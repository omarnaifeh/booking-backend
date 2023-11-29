const express = require('express');
const bookingController = require('../Controller/bookingController');
const BookingModel = require('../Models/bookingModel');

const router = express.Router();

router.post('/bookings', bookingController.createBooking);

module.exports = router