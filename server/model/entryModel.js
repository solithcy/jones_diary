const db = require('../database/......')

class Entry {

    constructor({id, uid, content, category, timestamp}) {
        this.id = id
        this.uid = uid
        this.content = content
        this.category = category
        this.timestamp = timestamp 
    }

    static async getAllByUid(uid) {
        const response = await db.query("SELECT * FROM entries WHERE uid = $1", [uid])

        if (response.rows.length === 0) {
            return []
        }
        const getUid = response.rows.map(u => new Entry(u))
        return getUid
    }

    static 
}