const { Router } = require("express");

const router = Router();

router.get("/dashboard", (req, res) => {
  res.send(`dashboard page`);
});

router.get("/about", (req, res) => {
  res.send(`about page`);
});

module.exports = router;
