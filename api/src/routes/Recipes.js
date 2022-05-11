const { Router } = require("express");
const { Recipe, Type } = require("../db.js");
const { Op } = require("sequelize");
const { KEY } = process.env;
const axios = require("axios");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name, OR } = req.query;
  let apiExter;
  let getRecipes;
  try {
    if (name) {
      apiExter = (
        await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=100&addRecipeInformation=true`
        )
      ).data.results
        .filter((e) => e.title.includes(name))
        .map((e) => {
          return {
            id: e.id,
            name: e.title,
            detalis: e.summary,
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

      getRecipes = await Recipe.findAll({
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
    } else {
      if (OR === "za") {
        //-----z-a
        apiExter = (
          await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=100&addRecipeInformation=true`
          )
        ).data.results.map((e) => {
          return {
            id: e.id,
            name: e.title,
            detalis: e.summary,
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

        getRecipes = await Recipe.findAll({
          include: [
            {
              model: Type,
              attributes: ["name"],
              through: { attributes: [] },
            },
          ],
        });

        let sumaData = [...getRecipes, ...apiExter];
        sumaData.sort((a, b) => (a.name > b.name ? -1 : 1));
        res.json(sumaData);
      } else if (OR === "az") {
        //a-z
        apiExter = (
          await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=100&addRecipeInformation=true`
          )
        ).data.results.map((e) => {
          return {
            id: e.id,
            name: e.title,
            detalis: e.summary,
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

        getRecipes = await Recipe.findAll({
          include: [
            {
              model: Type,
              attributes: ["name"],
              through: { attributes: [] },
            },
          ],
        });

        let sumaData = [...getRecipes, ...apiExter];
        sumaData.sort((a, b) => (a.name > b.name ? 1 : -1));
        res.json(sumaData);
      } else {
        //-------------------------------------------------------------------------------------------
        apiExter = (
          await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=100&addRecipeInformation=true`
          )
        ).data.results.map((e) => {
          return {
            id: e.id,
            name: e.title,
            detalis: e.summary,
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

        getRecipes = await Recipe.findAll({
          include: [
            {
              model: Type,
              attributes: ["name"],
              through: { attributes: [] },
            },
          ],
        });

        let sumaData = [...getRecipes, ...apiExter];
        res.json(sumaData);
      }
    }
  } catch (error) {
    next(error);
  }
});
/*-------------------------------------------------*/
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let esta;
    if (id.includes("-")) {
      esta = await Recipe.findByPk(id, {
        include: [
          {
            model: Type,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
    } else {
      esta = (
        await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`
        )
      ).data;

      esta = {
        name: esta.title,
        detalis: esta.summary,
        lvl: esta.healthScore,
        step: esta.analyzedInstructions[0]?.steps.map(
          (e) => `<ol> <il>${e.number}</il> ${e.step} </ol>`
        ),
        img: esta.image,
        Types: esta.diets.map((d) => {
          return { name: d };
        }),
      };
    }

    res.json(esta);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
//
// res.json(apiExter);
