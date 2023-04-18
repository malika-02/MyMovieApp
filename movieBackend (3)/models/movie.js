const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  row: {
    type: Number,
    required: false
  },
  number: {
    type: Number,
    required: false
  },
  available: {
    type: Boolean,
    required: false
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false
  }
});

const showtimeSchema = new Schema({
  date: {
    type: String,
    required: false
  },
  time: {
    type: String,
    required: false
  },
  seats: [seatSchema]
});

const movieSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  poster: {
    type: String,
    required: false
  },
  showtimes: [showtimeSchema]
});

module.exports = mongoose.model("Movie", movieSchema);
