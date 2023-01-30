const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const title = "Index";
  const isActive = true;
  res.render("index", { title, isActive });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
