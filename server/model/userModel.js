const db = require('../database/connect');
const bcrypt = require('bcrypt');

class User{
  #password;
  constructor({id, username, password}){
    this.id = id;
    this.username = username;
    this.#password = password;
  }
  static async createUser({username, password}){
    const result = await db.query("INSERT INTO users(username, password) VALUES($1, $2) RETURNING *;",
      [username, bcrypt.hashSync(password, 10)]
    );
    if(result.rows.length === 0){
      throw new Error("Couldn't create user");
    }
    return new User(result.rows[0]);
  }

  static async login({username, password}){
    const result = await db.query("SELECT * FROM users WHERE username = $1;",
      [username]
    );
    if(result.rows.length === 0){
      throw new Error("Couldn't find user");
    }
    const u = new User(result.rows[0]);
    if(bcrypt.compareSync(password, u.#password)) return u;
    throw new Error("Incorrect password");
  }

  static async getById(id){
    const result = await db.query("SELECT * FROM users WHERE id = $1;", [id]);
    if(result.rows.length === 0){
      throw new Error("Couldn't find user");
    }
    return new User(result.rows[0]);
  }
}

module.exports = User;
