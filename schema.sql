-- Run this SQL in your MySQL client to create the database and table
CREATE DATABASE IF NOT EXISTS formdb;
USE formdb;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  dob DATE NOT NULL
);
