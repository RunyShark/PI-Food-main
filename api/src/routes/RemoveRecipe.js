const { Router } = require("express");
const { Favorite } = require("../db.js");
const router = Router();

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const borrra = await Favorite.destroy({
      where: {
        id: id,
      },
    });

    res.send("Se elimino correctamente");
  } catch (e) {
    console.log(e);
    res.status(404).send(`Fatala error${e}`);
  }
});
module.exports = router;
