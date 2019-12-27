const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SickListSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  sickNo: {
    type: String,
    required: true,
    unique: true
  },
  tel: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  prePay: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("SickList", SickListSchema);
