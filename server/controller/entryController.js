const Entry = require("../model/entryModel");



//router.get("/category/:name", entryController.index);
async function index(req, res) {
    try{
        const entries = await Entry.getEntryByCategory(req.params.name);
        res.status(200).json(entries.filter(e=>e.uid===req.user.id));
    } catch (err) {
        res.status(500).json({error: err.message})
    };
}; //need to add user.id

//router.get("/entries/:id", entryController.show);
async function show(req, res) {
    try {
        const id = parseInt(req.params.id)
        const entry = await Entry.getById(id);
        if(entry.uid !== req.user.id) throw new Error("not found");
        res.status(200).json(entry)
    } catch (err) {
        res.status(404).json({error: err.message})
    };
};

//router.get("/date/:date", entryController.date);
async function date(req, res) {
    try{
        const date = parseInt(req.params.date)
        const entries = await Entry.getEntryByDate(date)
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({error: err.message})
    };
};

// router.post("/entries", entryController.create);
async function create(req, res) {
    try {
        const entry = await Entry.createEntry({
            ...req.body,
            uid: req.user.id,
        })
        res.status(200).json(entry)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// router.get("/entries", entryController.all);
async function all(req, res) {
    try {
        const entries = await Entry.getAllByUid(req.user.id);
        res.status(200).json(entries)
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}
// router.patch("/entries/:id", entryController.authenticate);
async function update (req, res) {
    try {
        const { id } = req.params;

        const entry = await Entry.getById(id);
        if(entry.uid !== req.user.id) throw new Error("not found");
        const updateEntry = await entry.updateEntry(req.body);
        if (!updateEntry) {
            return res.status(404).json({error: 'Entry not found'})
        }
        res.json(updateEntry);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message})
    }
}


// router.delete("/entries/:id", entryController.destroy);
async function destroy(req, res){
    try {
        const id = parseInt(req.params.id)
        const entry = await Entry.getById(id)
        const result = await entry.deleteEntry();
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({error: err.message})
    };
};

module.exports = {
    index, show, date, create, destroy, all, update,
}
