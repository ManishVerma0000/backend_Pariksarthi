const mongoose = require("mongoose");

const lineMenSchema = new mongoose.Schema({
  linemenName: {
    type: String,
    default: "",
  },
  district: {
    type: String,
    default: "",
  },
  lineName: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
});

const lineMen = mongoose.model("lineMen", lineMenSchema);

module.exports = lineMen;
