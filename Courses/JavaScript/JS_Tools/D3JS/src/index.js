const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const path = require("path");
app.use("/static", express.static(path.join(__dirname, ".")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
