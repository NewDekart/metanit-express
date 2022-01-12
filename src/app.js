const express = require("express");

const app = express();

app.use("/home/bar", (request, response) => {

    response.redirect("/about");
})

app.use("/about", (request, response) => {

    response.send("<h2>О сайте</h2>");
})

app.listen(3000);
