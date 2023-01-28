const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Morgan middleware for displaying console messages only
// There is middleware for:
// Upload images
// Check if it has any value in a cookie
// Validate data
// Etc

app.use(morgan("dev"));

app.get("/profile", (req, res) => {
  res.send(`Profile page`);
});

// Use in the last part of the document to not interfere with the routes
// app.use(express.static("./public"));
// Use prefix route when the route or file has the same name
// app.use('/public', express.static("./public")); --> here is a file with the name note.txt
// app.get("/note.txt", (req, res) => {
//   res.send(`This is a file`);
// });

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000);
console.log(`Server on port ${3000}`);
