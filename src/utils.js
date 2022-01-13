const fs = require("fs").promises;
const path = require("path");

async function getUsersFromFile(filePath) {

    const content = await fs.readFile(filePath)

    const users = JSON.parse(content)

    return users
}

module.exports = {
    getUsersFromFile
}