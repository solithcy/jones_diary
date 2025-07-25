const Entry = require("../model/entryModel");

async function index(req, res) {
    try{ 
        const entries = await Entry.getAllByUid();
        res.status(200).json(entries)
    }
}