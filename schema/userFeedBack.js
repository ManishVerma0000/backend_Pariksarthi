const mongoose = require("mongoose");

const userFeedBackSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
  },
  villageName: {
    type: String,
    default: "",
  },
  lineName: {
    type: String,
    default: "",
  },
  userFeedback: {
    type: String,
    default: "",
  },
  lineId: {
    type: Number,
    default: 0,
  },
});

const userFeedBack = mongoose.model("userFeedBack", userFeedBackSchema);

module.exports = userFeedBack;
