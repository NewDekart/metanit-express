const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (request, response) => {

    response.send("<h1>Главная</h1>")
})

app.listen(3000);
