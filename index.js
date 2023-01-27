const express = require("express");

const app = express();

//Logger middleware
app.use((req, res, next) => {
  //here logger logic

  console.log(`entered by Logger Middleware, Route: ${req.url} Method: ${req.method}`);
  next();
});

//IsAuthenticated middleware
app.use((req, res, next) => {
  //here isAuthenticated logic
  const { login } = req.query;
  if (login === "test@test.com") {
    next();
  } else {
    res.send("Not authorized");
  }
});

app.get("/profile", (req, res) => {
  res.send(`Profile page`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
