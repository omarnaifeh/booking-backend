const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'brugernavn',
  password: 'adgangskode',
  database: 'databasenavn'
});

db.connect(err => {
  if (err) {
    console.error('Fejl ved forbindelse til MySQL-database:', err);
  } else {
    console.log('Forbindelse til MySQL-database oprettet');
  }
});

module.exports = db;
