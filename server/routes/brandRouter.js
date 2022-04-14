const Router = require("express");
const router = new Router(); // create an object of a Router
const brandController = require("../controllers/brandController");

router.post("/", brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
