const router = require('express').Router();
const logIn = require('../controllers/Authentication/AuthenticationController');

/**
 * @swagger
 * /v1/login:
 *  get:
 *    tags:
 *      - Login
 *    summary: Authenticate user.
 *    description: Authenticate user.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Authenticate user.
 *        type: HTTP Code
 *
 */
router.get('/', logIn);

module.exports = router;

//function(req, res, next) {
  //  res.render('login');
  //}