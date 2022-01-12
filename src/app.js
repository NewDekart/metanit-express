const express = require("express");

const app = express();

app.get("/products/:model/versions/:versionNumber", (request, response) => {

    response.send(`Модель: ${request.params["model"]}, Версия: ${request.params["versionNumber"]}`)
})

app.get("/products/:productId", (request, response) => {

    response.send(`Id продукта: ${request.params["productId"]}`)
})

app.listen(3000);
