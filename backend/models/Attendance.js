const mongoose = require("mongoose");

module.exports = mongoose.model("Attendance", new mongoose.Schema({
  studentId: String,
  bookId: String,
  status: String,
  date: String
}));
