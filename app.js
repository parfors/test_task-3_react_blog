const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/api/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;