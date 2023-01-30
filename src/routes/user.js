const { Router } = require("express");

const router = Router();

router.get("/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Joe",
      lastname: "Montana",
    },
    {
      id: 2,
      name: "Harold",
      lastname: "Herrera",
    },
  ];

  // We can change EJS for handlebar as template engine
  res.render("users", { users });
});

module.exports = router;
