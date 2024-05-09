const { default: mongoose } = require("mongoose");

const adminUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String },
    password: { type: String, required: true },
    profile: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdminUser", adminUserSchema);
