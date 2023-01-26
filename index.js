const express = require("express");

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("New user created");
});

app.listen(3000);
console.log("Server on por ${3000}");
