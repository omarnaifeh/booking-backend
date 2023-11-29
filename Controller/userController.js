const db = require('../db');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check om brugeren allerede eksisterer i databasen
    const existingUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    const existingUser = await queryDatabase(existingUserQuery, [username, email]);

    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'Brugernavn eller e-mail eksisterer allerede.' });
    }

    // Opret brugeren i databasen
    const createUserQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    await queryDatabase(createUserQuery, [username, email, password]);

    res.status(201).json({ message: 'Brugeren er blevet registreret.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Der opstod en fejl.' });
  }
};

// Hjælpefunktion til at udføre SQL-forespørgsler
const queryDatabase = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
