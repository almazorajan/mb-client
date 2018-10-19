const process = require("process");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "dist")));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
