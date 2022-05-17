const { Router } = require("express");
const { Favorite } = require("../db.js");

const router = Router();
router.get("/", async (req, res, next) => {
  try {
    const newRecipe = await Favorite.findAll();

    res.send(newRecipe.length > 0 ? newRecipe : "no hay data");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
