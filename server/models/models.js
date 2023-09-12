const db = require('../db')

class User {
    async createUser(email, name, lastname, password) {
        let result = await db.query(`
            INSERT INTO users (email, name, lastname, password) 
            VALUES ('${email}', '${name}', '${lastname}', '${password}')`)

        return result
    }
    async getUsers() {
        let result = await db.query('SELECT * FROM users')

        return result
    }
    async getOneUser(email) {
        let result = await db.query(`SELECT * FROM users
            WHERE email = '${email}'`)

        return result.rows[0]
    }
    async updateUser() {

    }
    async deleteUser() {

    }
}

module.exports = {
    User
}