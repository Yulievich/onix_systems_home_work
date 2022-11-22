const express = require('express');
const app = express();
const PORT = 3000;
const filePath = "users.json";
const jsonParser = express.json();
const fs = require('fs');

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port: ${PORT}`);
});

app.get("/users", (req, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        const users = JSON.parse(data);
        res.send(users);
    });
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(filePath, "utf8", (err, data) => {
        const users = JSON.parse(data);
        let user = null;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                user = users[i];
                break;
            }
        }
        if (user) {
            res.send(user);
        }
        else {
            res.status(404).send();
        }
    });
});

app.post("/users", jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    let user = { name: userName, age: userAge };
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;
        const users = JSON.parse(data);
        const id = Math.max.apply(Math, users.map(function (o) {
            return o.id;
        }));
        user.id = id + 1;
        users.push(user);
        data = JSON.stringify(users);
        fs.writeFile("users.json", data, (err) => {
        });
        res.send(user);
    })
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(filePath, "utf8", (err, data) => {
        let users = JSON.parse(data);
        let index = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            const user = users.splice(index, 1)[0];
            data = JSON.stringify(users);
            fs.writeFile("users.json", data, (err) => { });
            res.send(user);
        } else {
            res.status(404).send();
        }

    })
});

app.put("/users", jsonParser, (req, res) => {

    if (!req.body) return res.sendStatus(400);

    const userId = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;

    fs.readFile(filePath, "utf8", (err, data) => {
        const users = JSON.parse(data);
        let user;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == userId) {
                user = users[i];
                break;
            }
        }

        if (user) {
            user.age = userAge;
            user.name = userName;
            data = JSON.stringify(users);
            fs.writeFile("users.json", data, (err) => { });
            res.send(user);
        }
        else {
            res.status(404).send(user);
        }
    });
});
