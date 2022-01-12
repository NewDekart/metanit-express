const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(async (request, response, next) => {

    const date = new Date()

    const logData = `${date.toTimeString()} ${request.method} ${request.url} ${request.get("user-agent")} \n`;

    fs.appendFile(path.resolve(__dirname, "log.txt"), logData, next)
})

app.get("/", (request, response) => {

    response.send("<h2>Hello express</h2>")
});

app.listen(3000);
