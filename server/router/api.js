const { Router } = require ('express')

const entryController = require("../controller/entryController");
const userController = require("../controller/userController");
const auth = require("../middleware/auth");
const router = Router();

router.get("/category/:name", entryController.index);
router.get("/entries/:id", entryController.show);
router.get("/date/:date", entryController.date);
router.get("/me", auth, userController.me)
router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/entries", auth, entryController.create);
router.get("/entries", auth, entryController.all);
// router.patch("/entries/:id", entryController.authenticate);
router.delete("/enteries/:id", entryController.destroy);

module.exports = router;
