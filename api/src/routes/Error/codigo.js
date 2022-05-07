// router.get("/", async (req, res, next) => {
//     try {
//       const { name } = req.query;
//       let apiExter;
//       let getRecipes;
//       if (name) {
//         apiExter = await getApiDataName();
//         getRecipes = await Recipe.findAll({
//           where: {
//             name: {
//               [Op.like]: `%${name}%`,
//             },
//             include: [
//               {
//                 model: Type,
//                 attributes: ["name"],
//                 through: { attributes: [] },
//               },
//             ],
//           },
//         });
//       } else {
//         apiExter = await getApiDataName();
//         getRecipes = await Recipe.findAll({
//           include: [
//             {
//               model: Type,
//               attributes: ["name"],
//               through: { attributes: [] },
//             },
//           ],
//         });
//       }

//       res.json([...apiExter, ...getRecipes]);
//     } catch (error) {
//       next(error);
//     }
//   });

//   router.get("/:id", async (req, res, next) => {
//     try {
//       const { id } = res.query;
//       if (typeof id === "string" || id.length > 100) {
//         const myDb = await Recipe.findOne({
//           where: { id: id },
//           include: [
//             {
//               model: Type,
//               attributes: ["name"],
//               through: { attributes: [] },
//             },
//           ],
//         });

//         res.json(myDb);
//       } else {
//         const dbApi = await getApiId(id);
//         res.json(dbApi);
//       }
//     } catch (error) {
//       res.status(500).send("Id No valida!!!!!!");
//     }
//   });
