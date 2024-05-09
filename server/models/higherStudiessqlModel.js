const mySql = require("mysql");

const higherstudiesModelMySql = `CREATE TABLE Higher_Studies_Sql(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),co
    age INT,
    gender VARCHAR(255),
    course_looking_for VARCHAR(255),
    email VARCHAR(255),
    location VARCHAR(255),
    language VARCHAR(255),
    phone_number VARCHAR(255) NOT NUll,
    contacted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

module.exports = higherstudiesModelMySql;
