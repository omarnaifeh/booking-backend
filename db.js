const mysql = require('mysql');

const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
  port: 3306,
  ssl: true  
});

db.connect(err => {
  if (err) {
    console.error('Fejl ved forbindelse til Azure MySQL-database:', err);
  } else {
    console.log('Forbindelse til Azure MySQL-database oprettet');
  }
});

module.exports = db;

