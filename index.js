require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const app = express();
const PORT = 8009;
const conn = require("./db/conn");
conn();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is running on the port on http://localhost:${PORT}`);
});
