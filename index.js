const express = require("express");
const morgan = require("morgan");

const app = express();

// Morgan middleware for displaying console messages only 
// There is middleware for:
// Upload images
// Check if it has any value in a cookie
// Validate data
// Etc

app.use(morgan('dev'))

app.get("/profile", (req, res) => {
  res.send(`Profile page`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
