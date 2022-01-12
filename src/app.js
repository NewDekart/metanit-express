const express = require("express");

const app = express();

app.get("/", (request, response) => {

    response.response("<h2>Главная страница</h2>");
})

app.use("/about", (request, response) => {

    const id = request.query.id;
    const name = request.query.name;

    response.send({id, name})
})

app.listen(3000);
