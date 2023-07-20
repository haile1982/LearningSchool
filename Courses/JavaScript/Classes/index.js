const express = require("express");
const app = express();
const path = require("path");

app.use("/static", express.static(path.join(__dirname, ".")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
