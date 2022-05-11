const { Router } = require("express");
const { Recipe } = require("../db.js");

const router = Router();
router.post("/", async (req, res, next) => {
  try {
    const { name, detalis, lvl, step, img, Types } = req.body;
    const newRecipe = await Recipe.create({
      name,
      detalis,
      lvl,
      step,
      img,
    });
    console.log(newRecipe.toJSON());
    await Types.map((e) => {
      newRecipe.addType(e);
    });
    //[1,2,3,4,]

    res.status(202).send("Nueva receta");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
