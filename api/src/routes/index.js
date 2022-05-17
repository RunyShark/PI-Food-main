const { Router } = require("express");
const routerRecipe = require("./Recipe.js");
const routerRecipes = require("./Recipes");
const routerType = require("./Type.js");
const routerUpdate = require("./UpdateRecipe.js");
const routerDelete = require("./RemoveRecipe.js");
const routerFav = require("./AddFav.js");
const routerGetFav = require("./GetFav.js");

const router = Router();

router.use("/recipe", routerRecipe);
router.use("/recipes", routerRecipes);
router.use("/type", routerType);
router.use("/update", routerUpdate);
router.use("/delete", routerDelete);
router.use("/fav", routerFav);
router.use("/favorite", routerGetFav);

module.exports = router;
