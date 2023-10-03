const Router = require('express')
const router = new Router()
const taskController = require('../controllers/taskController')

router.post('/create', taskController.create)
router.get('/getAll', taskController.getAll)
router.get('/getOne', taskController.getOne)

module.exports = router