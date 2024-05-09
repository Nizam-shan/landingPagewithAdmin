const { default: mongoose } = require("mongoose");

const jobSeekerSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    qualification: { type: String },
    email: { type: String, required: true },
    resume: { type: String }, // upload pdf
    phone_number: { type: String, required: true },
    contacted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobSeekerSchema", jobSeekerSchema);
