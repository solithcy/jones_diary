const { Router } = require ('express')

const entryController = require("../controller/entryController");
const entryRouter = Router();

entryRouter.get("/category/:name", entryController.index);
entryRouter.get("entries/:id", entryController.show);
entryRouter.get("/date/:date", entryController.date)
entryRouter.get("/me", entryController.profile)
entryRouter.post("/login", userController.login);
entryRouter.post("/register", userController.register)
entryRouter.post("/entries", entryController.create)
entryRouter.patch("/entries/:id", entryController.authenticate)
entryRouter.delete("/enteries/:id", entryController.destroy)