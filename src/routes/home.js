const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const title = "Index";
  res.render("index", { title });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
