const db = require('../database/connect.js')

class Entry {

    constructor({id, uid, content, category, timestamp}) {
        this.id = id
        this.uid = uid
        this.content = content
        this.category = category
        this.timestamp = timestamp 
    }

    static async getEntryByCategory(cat) {
        const result = await db.query("SELECT * FROM entries WHERE category = $1", [cat])
        return result.rows.map(u = new Entry(u))
    }

    static async getAllByUid(uid) {
        const response = await db.query("SELECT * FROM entries WHERE uid = $1", [uid])

        if (response.rows.length === 0) {
            return []
        }
        const getUid = response.rows.map(u => new Entry(u))
        return getUid
    }

    static async getEntryByDate(date) {
        const result = await db.query("SELECT * FROM entries WHERE created::date = $1 ORDER BY created DESC",[date])
        return result.rows.map(u => new Entry(u))
    }

    static async createEntry({content, category, date}) {
        const result = await db.query("INSERT INTO enteries (content, category, date) VALUES ($1, $2, $3) RETURINING *", [content, category, date])
        return result.rows[0];
    }

    async updateEntry({content, category}) {
        const result = await db.query(
            "UPDATE enteries SET content = $1, category = $2 WHERE id = $3 RETURNING *")
        return result.rows[0]
    }

    async deleteEntry(id){
        const result = await db.query("DELETE FROM enteries WHERE id = $1 RETURNING *", [id])
        return result.rows[0]
    }
}

module.exports = {
    getEntryByCategory,
    getAllByUid,
    getEntryByDate,
    updateEntry,
    deleteEntry
};