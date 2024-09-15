const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(process.env.CONNURL);
    console.log("connected to Db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn;
