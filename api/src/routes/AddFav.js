const { Router } = require("express");
const { Favorite } = require("../db.js");

const router = Router();
router.post("/", async (req, res, next) => {
  try {
    const { name, detalis, lvl, img, Types } = req.body;
    const newRecipe = await Favorite.create({
      name,
      detalis,
      lvl,
      img,
      Types,
    });

    res.status(202).send("Add Fav");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
