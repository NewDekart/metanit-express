const express = require("express");

const app = express();

app.get("/bo?k", (request, response) => {

    response.send(request.url)
})

app.get("/bo+k", (request, response) => {

    response.send(request.url)
})

app.get("/bo*k", (request, response) => {

    response.send(request.url)
})

app.listen(3000);
