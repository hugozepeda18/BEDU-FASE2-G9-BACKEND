const router = require('express').Router();
const {
  createTypeUser,
  getTypeUser,
  getTypeUsers,
  updateTypeUser,
  deleteTypeUser
} = require('../controllers/Users/UserTypeController')

/**
 * @swagger
 * /v1/Users/Types:
 *  post:
 *    tags:
 *      - Users/Types
 *    summary: Create user types.
 *    description: Creates a new user types.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: User types information.
 *        type: HTTP Code
 *
 */
router.post('/', createTypeUser)

/**
 * @swagger
 * /v1/Users/Types:
 *  get:
 *    tags:
 *      - Users/Types
 *    summary: Available users types.
 *    description: List of available users types.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All available users types.
 *        type: json
 *      204: 
 *        description: If there are not users types.
 *        type: empty array
 */
router.get('/', getTypeUsers)

/**
 * @swagger
 * /v1/Users/Types/:idTypeUser:
 *  get:
 *    tags:
 *      - Users/Types
 *    summary: Get the corresponding user with id.
 *    description: User information.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: User information.
 *      404: 
 *        description: User not found.
 *        type: empty array
 *
 */
router.get('/:idTypeUser', getTypeUser)

/**
 * @swagger
 * /v1/Users/Types/:idTypeUser:
 *  put:
 *    tags:
 *      - Users/Types
 *    summary: Update the corresponding user with id.
 *    consumes:
 *      - application/json
 *    description: User update.
 *    parameters:
 *      - name: idTypeUser
 *        in: query
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: User with updated information.
 */
router.put('/:idTypeUser', updateTypeUser)

/**
 * @swagger
 * /v1/Users/Types/:idTypeUser:
 *  delete:
 *    tags:
 *      - Users/Types
 *    name: Delete User Type
 *    summary: Delete the corresponding user with id.
 *    consumes:
 *      - application/json
 *    description: Delete user types.
 *    parameters:
 *      - name: idTypeUser
 *        in: query
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: User type eliminated by idUserType.
 *      401:
 *        description: Bad idTypeUser, not found in DB.
 */
router.delete('/:idTypeUser', deleteTypeUser)

module.exports = router;