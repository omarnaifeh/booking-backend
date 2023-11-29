const db = require('../db');

const createBooking = (date, isBooked) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO bookings (date, isBooked) VALUES (?, ?)';
    db.query(query, [date, isBooked], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
const getAllBookings = () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM bookings';
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const findBookingByDate = (date) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM bookings WHERE date = ?';
    db.query(query, [date], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = { createBooking, findBookingByDate };
