import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  client_id: { type: String, required: true },
  camera: { type: String, required: true },
  usecase: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.models.Data || mongoose.model("Data", userSchema);
