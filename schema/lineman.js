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
  station: {
    type: String,
    default: "",
  },
  isLineMen: {
    type: Boolean,
    default: false,
  },
});

const lineMen = mongoose.model("lineMen", lineMenSchema);

module.exports = lineMen;
