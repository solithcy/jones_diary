const { Router } = require ('express')

const entryController = require("../controller/entryController");
const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.get("entries/:id", entryController.show);
entryRouter.post("/login", userController.login);
entryRouter.post("/register", userController.register)
entryRouter.post("/entries", entryController.create)
entryController.patch("/entries/:id", )
