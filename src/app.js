const express = require("express");
const path = require("path");

const app = express();

app.use("/home/bar/foo", (request, response) => {

    response.status(404).send("Nothing to do here!")
});

app.listen(3000);
