const fs = require("fs");
const reader = fs.createReadStream("README.md");

reader.on("data", function (file) {
  console.log(file.toString().trim().split("\n")[0]);
});
