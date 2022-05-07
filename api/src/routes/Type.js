const { Router } = require("express");
const { Type } = require("../db");

const router = Router();
router.get("/", async (req, res, next) => {
  try {
    const getType = await Type.findAll();
    res.send(getType.length > 0 ? getType : "Algo salio mal :c");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
