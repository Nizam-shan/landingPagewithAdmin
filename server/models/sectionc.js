const { default: mongoose } = require("mongoose");

const sectionC = new mongoose.Schema(
  {
    email: { type: String, required: true },
    contact_no: { type: String, required: true },
    phone_number: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sectionc", sectionC);
