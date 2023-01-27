const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`entered by Middleware, Route: ${req.url} Method: ${req.method}`);

  next();
});

app.get("/profile", (req, res) => {
  res.send(`Profile page`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
