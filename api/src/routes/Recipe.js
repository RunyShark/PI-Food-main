const { Router, response } = require("express");
const { Recipe } = require("../db.js");

const router = Router();
router.post("/", async (req, res, next) => {
  try {
    const { name, detalis, score, lvl, step, img, Types } = req.body;
    const newRecipe = await Recipe.create({
      name,
      detalis,
      score,
      lvl,
      step,
      img,
    });
    console.log(newRecipe.id);

    await newRecipe.addType(Types);

    res.status(202).send("Nueva receta");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
