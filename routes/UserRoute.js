const router = require('express').Router();
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/UserController')

/**
 * @swagger
 * /v1/Users/:
 *  post:
 *      summary: Create user.
 *      description: Creates a new user.
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: User information.
 *              type: HTTP Code
 *
 */
router.post('/', createUser)

/**
 * @swagger
 * /v1/Users/:
 *  get:
 *      summary: Available users.
 *      description: List of available users.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: All available users.
 *              type: json
 *          204: 
 *              description: If there are not users.
 *              type: empty array
 *
 */
router.get('/', getUsers)

/**
 * @swagger
 * /v1/Users/:idUser/:
 *  get:
 *      summary: Get the corresponding user with id.
 *      description: User information.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: User information.
 *              type: json
 *          404: 
 *              description: User not found.
 *              type: empty array
 *
 */
router.get('/:idUser', getUser)

/**
 * @swagger
 * /v1/Users/:idUser/:
 *  put:
 *      summary: Update the corresponding user with id.
 *      description: User update.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: User with updated information.
 *              type: json
 *
 */
router.put('/:idUser', updateUser)

/**
 * @swagger
 * /v1/Users/:idUser/:
 *  delete:
 *      summary: Delete the corresponding user with id.
 *      description: User deletion.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: User eliminated + user id.
 *              type: json
 *
 */
router.delete('/:idUser', deleteUser)

module.exports = router;