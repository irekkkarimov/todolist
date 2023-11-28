const ApiError = require('../error/ApiError')
const { User } = require('../models/models')
const jwt = require("jsonwebtoken");
const user = new User()

const generateJwt = (id, email, name, lastname) => {
    return jwt.sign(
        {id, email, name, lastname},
        process.env.SECRET_KEY,
        {expiresIn: '7d'}
    )
}

class userController {
    async registration(req, res, next) {
        try {
            const {email, name, lastname, password} = req.body
            await user.createUser(email, name, lastname, password)
            let createdUser = await user.getOneUser(email)
            let token = generateJwt(createdUser.id, createdUser.email, createdUser.name, createdUser.lastname)
            res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            let user = await user.getOneUser(email)
            if (user.password === password) {
                let token = generateJwt(user.id, user.email, user.name, user.lastname)
                res.json({token})
            }
            if (user.password !== password)
                return res.json('Неверный пароль')

        } catch (e) {
            res.json({e})
        }
    }

    async check(req, res, next) {
        return res.status(200).json()
    }

    async edit(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            let {name, password} = req.body

            if (name === "")
                name = decoded.name
            if (password === "")
                password = decoded.password

            let result = await user.updateUser(decoded.id, name, password)
            res.json({result})
        } catch (e) {
            res.json({e})
        }

    }
}

module.exports = new userController()