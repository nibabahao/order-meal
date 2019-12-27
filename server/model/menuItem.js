const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  fid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  tid: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
