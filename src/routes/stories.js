const express = require("express");
const router = express.Router();

router.get("/stories", (req, res) => {
  const stories = [{
    raised: 5000000,
    clients: 200,
    partners: 50,
    avarege_riot: 3.5,
  }];

  res.send(stats);
});

module.exports = router;