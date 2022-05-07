const { Router } = require("express");
const routerRecipe = require("./Recipe.js");
const routerRecipes = require("./Recipes");
const routerType = require("./Type.js");

const router = Router();
router.use("/recipe", routerRecipe);
router.use("/recipes", routerRecipes);
router.use("/type", routerType);

module.exports = router;
