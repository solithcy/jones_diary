const db = require('../database/connect.js')

class Entry {

    constructor({id, uid, content, category, timestamp}) {
        this.id = id
        this.uid = uid
        this.content = content
        this.category = category
        this.timestamp = timestamp 
    }

    async getEntryByCategory(cat) {
        const result = await db.query("SELECT * FROM entries WHERE category = $1", [cat])
        return result.rows
    }

    async getAllByUid(uid) {
        const response = await db.query("SELECT * FROM entries WHERE uid = $1", [uid])

        if (response.rows.length === 0) {
            return []
        }
        const getUid = response.rows.map(u => new Entry(u))
        return getUid
    }

    async getEntryByDate(date) {
        const result = await db.query("SELECT * FROM entries WHERE created::date = $1 ORDER BY created DESC",[date])
        return result.rows
    }

    //async createEntry({content, category, date})

    
}