const mongoose = require("mongoose");

module.exports = mongoose.model("Book", new mongoose.Schema({
  bookId: String,
  title: String,
  category: String,
  author: String
}));
