const mySql = require("mysql");
const jobSeekerModelMySql = `
CREATE TABLE  Job_Seeker_sql(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    gender VARCHAR(255),
    qualification VARCHAR(255),
    email VARCHAR(255),
    resume VARCHAR(255),
    phone_number VARCHAR(255) NOT NUll,
    contacted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

module.exports = jobSeekerModelMySql;
