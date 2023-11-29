const BookingModel = require('../Models/bookingModel');

exports.createBooking = async (req, res) => {
  try {
    const { date, userEmail } = req.body;

    const existingBooking = await BookingModel.findBookingByDate(date);

    if (existingBooking) {
      return res.status(409).json({ message: 'Datoen er allerede optaget.' });
    }

    await BookingModel.createBooking(date, true);

    // Send bekræftelses mail
    const mailOptions = {
      from: 'din.email@gmail.com',
      to: userEmail,
      subject: 'Bekræftelse af booking',
      text: `Din booking for ${date} er bekræftet.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Der opstod en fejl under afsendelse af e-mail.' });
      } else {
        console.log('E-mail sendt: ' + info.response);
        res.status(201).json({ message: 'Den valgte dato er optaget, og en bekræftelses e-mail er sendt.' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Der opstod en fejl.' });
  }
};

