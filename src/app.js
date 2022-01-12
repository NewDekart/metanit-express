const express = require("express");
const path = require("path");

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", (request, response) => {

    response.sendFile(path.resolve(__dirname, "index.html"))
})

app.post("/", urlencodedParser, (request, response) => {

    if (!request.body) {

        return response.sendStatus(400)
    }

    response.send(request.body)
})

app.listen(3000);
