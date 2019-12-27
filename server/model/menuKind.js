const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuKindSchema = new Schema({
  tid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("MenuKind", MenuKindSchema);
