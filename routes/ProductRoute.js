const router = require('express').Router();
const {
    createProduct,
    getProducts,
    getProductByProdName,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductController');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:prodName', getProductByProdName);
router.patch('/:idProduct', updateProduct);
router.delete('/:idProduct', deleteProduct);

module.exports = router;