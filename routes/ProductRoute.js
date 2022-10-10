const router = require('express').Router();
const {
    createProduct,
    getProducts,
    getProductByProdName,
    updateProduct,
    deleteProduct
} = require('../controllers/Products/ProductController');

/**
 * @swagger
 * /v1/products:
 *  post:
 *    tags:
 *      - Products
 *    summary: Create a new product.
 *    description: Create a new product.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Create a new product.
 *        type: HTTP Code
 *
 */
router.post('/', createProduct);

/**
 * @swagger
 * /v1/products:
 *  get:
 *    tags:
 *      - Products
 *    summary: Get all products.
 *    description: Get all products.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Get all products.
 *        type: HTTP Code
 *
 */
router.get('/', getProducts);

/**
 * @swagger
 * /v1/products/:prodName:
 *  get:
 *    tags:
 *      - Products
 *    summary: Get a product by name.
 *    description: Get a product by name.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Get a product by name.
 *        type: HTTP Code
 *
 */
router.get('/:prodName', getProductByProdName);

/**
 * @swagger
 * /v1/products/:idProduct:
 *  patch:
 *    tags:
 *      - Products
 *    summary: Update a product by id.
 *    description: Update a product by id.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Update a product by id.
 *        type: HTTP Code
 *
 */
router.patch('/:idProduct', updateProduct);

/**
 * @swagger
 * /v1/products/:idProduct:
 *  delete:
 *    tags:
 *      - Products
 *    summary: Delete a product by id.
 *    description: Update isActive to false for delete product.
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: Update isActive to false for delete product.
 *        type: HTTP Code
 *
 */
router.delete('/:idProduct', deleteProduct);

module.exports = router;