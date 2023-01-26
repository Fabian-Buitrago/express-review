const express = require("express");

const app = express();

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.send(`New user created: ${id}`);
});

app.get("/add/:value1/:value2", (req, res) => {
  console.log(req.params);
  const { value1, value2 } = req.params;
  res.send(`Result: ${parseInt(value1) + parseInt(value2)}`);
});

app.get("/users/:username/photo", (req, res) => {
  console.log(req.params);
  const { username } = req.params;
  if (username === "ana") {
    return res.sendFile("./javascript.png", { root: __dirname });
  }
  res.send(`User not found`);
});

app.get("/name/:name/age/:age", (req, res) => {
  console.log(req.params);
  const { name, age } = req.params;

  res.send(`The user ${name} is ${age} years old`);
});

app.listen(3000);
console.log("Server on por ${3000}");
