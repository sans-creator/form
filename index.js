const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change as needed
  password: 'Shipra@123', // change as needed
  database: 'formdb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Render form
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, dob } = req.body;
  const sql = 'INSERT INTO users (name, email, dob) VALUES (?, ?, ?)';
  db.query(sql, [name, email, dob], (err, result) => {
    if (err) throw err;
    res.send('User data saved successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
