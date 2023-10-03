const ApiError = require('../error/ApiError')
const { Task } = require('../models/models')
const task = new Task()

class taskController {
    async create(req, res, next) {
        try {
            const {user_id, name, description, category, deadline} = req.body
            let result = await task.createTask(user_id, name, description, category, deadline)
            res.json('Success')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const {user_id} = req.query
            let tasks = await task.getTasks(user_id)
            res.json(tasks)
        } catch (e) {
            res.json({e})
        }
    }

    async getOne(req, res, next) {
        try {
            const {user_id, id} = req.body
            let result = await task.getOneTask(user_id, id)
        } catch (e) {
            res.json({e})
        }
    }
}

module.exports = new taskController()