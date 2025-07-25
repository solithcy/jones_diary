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
        const entries = await Entry.getAllByUid(id)
        res.status(200).json(entries)
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
// async function update(req, res) => {
//     try {
//         const { id } = req.params;
//         const { category } = req.body
//
//         const updateEntry = await
//     }
// }


// router.delete("/entries/:id", entryController.destroy);
async function destroy(req, res){
    try {
        const id = parseInt(req.params.id)
        const entry = await Entry.getAllByUid(uid)
        const result = await entry.destroy()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({error: err.message})
    };
};

module.exports = {
    index, show, date, create, destroy, all
}
