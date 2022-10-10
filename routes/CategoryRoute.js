const router = require('express').Router();
const {
    createCategory,
    getCategories,
    getProdCategoriesByDesc
} = require('../controllers/Products/CategoryController');

/**
 * @swagger
 * /v1/categories:
 *  post:
 *    tags:
 *      - Categories
 *    summary: Create a new categories.
 *    description: Create a new categories
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Create a new categories
 *        type: HTTP Code
 *
 */
router.post('/', createCategory);

/**
 * @swagger
 * /v1/categories:
 *  get:
 *    tags:
 *      - Categories
 *    summary: Get all categories.
 *    description: Get all categories.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *       description: Get all categories.
 *       type: HTTP Code
 */
router.get('/', getCategories);

/**
 * @swagger
 * /v1/categories/:desc:
 *  get:
 *    tags:
 *      - Categories
 *    summary: Get category by desc.
 *    description: Get category by desc.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Get category by desc.
 *        type: HTTP Code
 *
 */
router.get('/:desc', getProdCategoriesByDesc);

module.exports = router;