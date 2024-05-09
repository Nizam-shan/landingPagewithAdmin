// db.js

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // Specify the hostname or IP address here
  port: 3307, // Specify the port if it's different from the default (3306)
  user: "root",
  password: "Nizamshan@123", // Enter the password for your MySQL user here
  database: "ibs",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL connected successfully");
});

connection.on("error", (error) => {
  console.error("Error with MySQL connection:", error);
});

module.exports = connection;
