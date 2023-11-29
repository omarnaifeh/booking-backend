const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('./db');
const userRouter = require('./routers/userRouter');
const calendarRouter = require('./routers/calendarRouter');
const bookingRouter = require('./routers/bookingRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());


db.connect(err => {
  if (err) {
    console.error('Fejl ved forbindelse til MySQL-database:', err);
  } else {
    console.log('Forbindelse til MySQL-database oprettet');
  }
});


app.use('/user', userRouter);
app.use('/calendar', calendarRouter);
app.use('/booking', bookingRouter);


app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
