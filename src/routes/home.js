const { Router } = require("express");

const router = Router();

router.get("/dashboard", (req, res) => {
  res.send(`dashboard page`);
});

router.get("/about", (req, res) => {
  const title = "My page created from express";
  res.render("index", { title });
});

module.exports = router;
