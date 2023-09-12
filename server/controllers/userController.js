const ApiError = require('../error/ApiError')
const { User } = require('../models/models')
const user = new User()

class userController {
    async registration(req, res, next) {
        try {
            const {email, name, lastname, password} = req.body
            let result = await user.createUser(email, name, lastname, password)
            res.json('Success')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            let result = await user.getOneUser(email)
            if (result.password === password)
                return res.json('Авторизован')
            if (result.password !== password)
                return res.json('Неверный пароль')

        } catch (e) {
            res.json({e})
        }
    }

    async check(req, res, next) {
        return
    }
}

module.exports = new userController()