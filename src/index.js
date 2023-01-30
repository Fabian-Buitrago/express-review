const express = require("express");
const morgan = require("morgan");
const path = require("path");

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/user");

const app = express();

// Morgan middleware for displaying console messages only
// There is middleware for:
// Upload images
// Check if it has any value in a cookie
// Validate data
// Etc

// Settings
app.set("case sensitive routing", true);
app.set("appName", "Express review");
app.set("port", 4000);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(HomeRoutes);
app.use(UserRoutes);

// Use in the last part of the document to not interfere with the routes
// app.use(express.static("./public"));
// Use prefix route when the route or file has the same name
// app.use('/public', express.static("./public")); --> here is a file with the name note.txt
// app.get("/note.txt", (req, res) => {
//   res.send(`This is a file`);
// });

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
