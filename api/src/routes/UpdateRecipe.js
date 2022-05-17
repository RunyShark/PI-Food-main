const { Router } = require("express");
const { Favorite } = require("../db.js");
const router = Router();

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, detalis, lvl, img } = req.body;

    const updateRecipe = await Favorite.findByPk(id);
    updateRecipe.name = name;
    updateRecipe.detalis = detalis;
    updateRecipe.lvl = lvl;
    updateRecipe.img = img;
    await updateRecipe.save();
    res.send("Update Listo");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
