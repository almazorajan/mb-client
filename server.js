
const process = require("process");
const express = require("express");
const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});