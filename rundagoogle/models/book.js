const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  TODO: //SEE homework instruction number 4
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
