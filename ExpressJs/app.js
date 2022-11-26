const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("Port at 8000");
});
