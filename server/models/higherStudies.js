const { default: mongoose } = require("mongoose");

const higherStudiesSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    course_looking_for: { type: String },
    location: { type: String },
    email: { type: String, required: true },
    language: { type: String },
    phone_number: { type: String, required: true },
    contacted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HigherEducation", higherStudiesSchema);
