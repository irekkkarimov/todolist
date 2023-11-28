const db = require('../db')

class User {
    async createUser(email, name, lastname, password) {
        return await db.query(`
            INSERT INTO users (email, name, lastname, password) 
            VALUES ('${email}', '${name}', '${lastname}', '${password}')`)


    }
    async getUsers() {
        return await db.query('SELECT * FROM users')
    }
    async getOneUser(email) {
        let result = await db.query(`SELECT * FROM users
            WHERE email = '${email}'`)

        return result.rows[0]
    }
    async updateUser(id, name, password) {
        console.log(id + " " + name + " " + password)
        return await db.query(`UPDATE users
            SET name = '${name}',
                password = '${password}'
            WHERE id = '${id}'`)
    }
    async deleteUser() {

    }
}

class Task {
    async createTask(user_id, name, description, category, deadline) {
        return await db.query(`
            INSERT INTO tasks (user_id, name, description, category, deadline) 
            VALUES ('${user_id}', '${name}', '${description}', '${category}', '${deadline}')`)
    }
    async getTasks(user_id) {
        return await db.query(`SELECT * FROM tasks
            WHERE user_id = '${user_id}'`)
    }
    async getOneTask(user_id, id) {
        let result = await db.query(`SELECT * FROM tasks
            WHERE user_id = '${user_id}'`)

        return result.rows[0]
    }
    async updateTask() {

    }
    async deleteTask() {

    }
}

module.exports = {
    User,
    Task
}