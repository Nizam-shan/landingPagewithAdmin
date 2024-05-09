var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  // debug: true,
  // logger: true,
  secureConnection: false,
  auth: {
    user: "nizamshan27@gmail.com",
    pass: "akfe utib drgl ubaz",
  },
  tls: {
    rejectUnauthorized: true,
  },
});

const sendEmail = async (to, subject, text) => {
  console.log("🚀 ~ sendEmail ~ to:", to);
  var mailOptions = {
    from: "nizamshan27@gmail.com",
    to,
    subject,
    text,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent", info.response);
    return info;
  } catch (error) {
    console.log("Not sent", error);
    return error;
  }
};

module.exports = { sendEmail };
