const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;

    let apiExter = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=500&addRecipeInformation=true`
      )
    ).data.results
      .filter((e) => e.title.includes(name))
      .map((e) => {
        return {
          id: e.id,
          name: e.title,
          detalis: e.summary,
          score: e.spoonacularScore,
          lvl: e.healthScore,
          step: e.analyzedInstructions[0]?.steps.map(
            (e) => `${e.number} ${e.step}`
          ),
          img: e.image,
          Types: e.diets.map((d) => {
            return { name: d };
          }),
        };
      });

    let getRecipes = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    let sumaData = [...apiExter, ...getRecipes];
    res.json(sumaData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
