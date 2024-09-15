const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
  lineName: {
    type: String,
    default: "",
  },
  district: {
    type: String,
    default: "",
  },
  station: {
    type: String,
    default: "",
  },
});

const line = mongoose.model("line", lineSchema);

module.exports = line;
