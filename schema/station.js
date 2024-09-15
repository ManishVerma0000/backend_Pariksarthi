const mongoose = require("mongoose");

const lineStationSchema = new mongoose.Schema({
  district: {
    type: String,
    default: "",
  },
  stationName: {
    type: String,
    default: "",
  },
});

const station = mongoose.model("station", lineStationSchema);

module.exports = station;
