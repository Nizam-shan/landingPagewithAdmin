const mySql = require("mysql");

const otplogSchemaModelmysql = `CREATE TABLE otplog_Schema_Sql(
    id INT AUTO_INCREMENT PRIMARY_KEY,
    phone_number  VARCHAR(25),
    otp VARCHAR(6) NOT NULL,
    verification  ENUM('success','failure','pending') NOT NULL,
    timsStamp: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

module.exports = otplogSchemaModelmysql;
