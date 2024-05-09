const { default: mongoose } = require("mongoose");

const OtpLog = new mongoose.Schema({
  phone_number: { type: String },
  otp: { type: String, required: true },
  verification: {
    type: String,
    enum: ["success", "failure", "pending"],
    required: true,
  },
  timeStamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("OtpLogs", OtpLog);
