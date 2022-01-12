const express = require("express");

const app = express();

app.get("/", (request, response) => {

    response.send("<h2>Hello express</h2>")
});

app.get("/about", (request, response) => {

    response.send("<h2>О сайте</h2>")
});

app.get("/contact", (request, response) => {

    response.send("<h2>Контакты</h2>")
});

app.listen(3000);
