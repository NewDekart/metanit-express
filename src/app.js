const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const { getUsersFromFile } = require("./utils");

const app = express();
const jsonParser = express.json();

app.use(express.static(path.resolve(__dirname, "public")));

const filePath = path.resolve(__dirname, "users.json");

app.get("/api/users", async (req, res) => {

    const users = await getUsersFromFile(filePath);
    
    res.send(users);
})

app.get("/api/users/:id", async (req, res) => {

    const userId = parseInt(req.params.id)

    const users = await getUsersFromFile(filePath)

    const user = users.find((user) => user.id === userId)

    if (user) {

        res.send(user)

        return

    }

    res.sendStatus(404)

})

app.post("/api/users", jsonParser, async (req, res) => {

    if (!req.body) {

        res.sendStatus(404)
    }

    const { name: userName, age: userAge } = req.body

    const users = await getUsersFromFile(filePath)

    const currentMaxId = Math.max(...users.map(user => user.id))

    const userId = currentMaxId + 1

    const newUser = {
        id: userId,
        name: userName,
        age: userAge,
    }

    const newUsers = [
        ...users,
        newUser,
    ]

    await fs.writeFile(filePath, JSON.stringify(newUsers))

    res.send(newUser)
})

app.delete("/api/users/:id", async (req, res) => {

    const userId = parseInt(req.params.id)

    const users = await getUsersFromFile(filePath)

    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex === -1) {

        res.sendStatus(404)

        return
    }

    const user = users[userIndex]

    const newArray = [
        ...users.slice(0, userIndex),
        ...users.slice(userIndex + 1)
    ]

    await fs.writeFile(filePath, JSON.stringify(newArray))

    res.send(user)
})

app.put("/api/users", jsonParser, async (req, res) => {
    
    const changedUserData = req.body

    const changedUserId = parseInt(changedUserData.id)

    const users = await getUsersFromFile(filePath)

    const userIndex = users.findIndex((user) => user.id === changedUserId)

    if (userIndex === -1) {

        res.sendStatus(404)

        return
    }

    const newArray = [...users]

    newArray[userIndex] = changedUserData

    await fs.writeFile(filePath, JSON.stringify(newArray))

    res.send(changedUserData)
})

app.listen(3000);
