const Entry = require("../model/entryModel");


//router.get("/category/:name", entryController.index);
async function index(req, res) {
    try{ 
        const entries = await Entry.getAllByUid();
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({error: err.message})
    };
};

//router.get("/entries/:id", entryController.show);
async function show(req, res) {
    try {
        const id = parseInt(req.params.id)
        const enteries = await Entry.getAllByUid(id)
        res.status(200).json(entries)
    } catch (err) {
        res.status(404).json({error: err.message})
    };
};

//router.get("/date/:date", entryController.date);
async function date(req, res) {
    try{
        const date = parseInt(req.params.date)
        const enteries = await Entry.getEntryByDate(date)
        res.status(200).json(enteries)
    } catch (err) {
        res.status(500).json({err: error.message})
    };
};

//router.get("/me", userController.me)
//router.post("/login", userController.login);
//router.post("/register", userController.register);
// router.post("/entries", entryController.create);

// router.patch("/entries/:id", entryController.authenticate);
// router.delete("/enteries/:id", entryController.destroy);

