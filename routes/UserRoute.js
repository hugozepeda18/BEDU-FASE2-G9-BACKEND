const router = require('express').Router();
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/UserController')

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:idUser', getUser)
router.put('/:idUser', updateUser)
router.delete('/:idUser', deleteUser)

module.exports = router;