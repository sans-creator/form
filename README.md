# 📝 User Registration Form

A simple web-based User Registration Form built with **Node.js**, **Express**, **EJS**, and **MySQL**. This project collects user input (Name, Email, Date of Birth) and stores it in a SQL database.

---

## 📸 Screenshot

![image](https://github.com/user-attachments/assets/a929e4d3-7bfe-4a73-8816-419cc4045b16)

![image](https://github.com/user-attachments/assets/ce798acc-52e0-4bb1-9731-e18880387912)


---

## 🔧 Tech Stack

- **Frontend:** EJS (Embedded JavaScript Templates), HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL

---

## 🚀 Features

- Responsive and clean UI
- Input fields: Name, Email, Date of Birth
- Date picker UI for DOB
- Server-side form handling
- SQL Database storage

---

## 🗂 Project Structure
![image](https://github.com/user-attachments/assets/a30c69a9-434c-4307-b3d9-bc665cb7932a)


CREATE DATABASE user_registration;
USE user_registration;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    dob DATE
);
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password', // <-- change this
    database: 'user_registration'
});
