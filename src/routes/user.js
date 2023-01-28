const { Router } = require("express");

const router = Router();

router.get("/username", (req, res) => {
  res.send(`username page`);
});

router.get("/profile", (req, res) => {
  res.send(`Profile page`);
});

module.exports = router;
