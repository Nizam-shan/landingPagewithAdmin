const mySql = require("mysql");

const sectionCModelMySql = `CREATE TABLE SectionC_Sql(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    contact_no VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255) NOT NUll,
    contacted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

module.exports = sectionCModelMySql;
