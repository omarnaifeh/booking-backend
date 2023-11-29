const Booking = require('../Models/bookingModel');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    // Implementer logik for at formatere og sende kalenderdata til klienten
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Der opstod en fejl.' });
  }
};
