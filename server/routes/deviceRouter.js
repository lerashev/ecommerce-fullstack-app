const Router = require("express");
const router = new Router(); // create an object of a Router
const deviceController = require("../controllers/devideController");

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
