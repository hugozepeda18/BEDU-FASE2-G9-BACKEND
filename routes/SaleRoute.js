const router = require('express').Router();
const {
    createSale
} = require('../controllers/Sales/SaleController');

router.post('/', createSale);

module.exports = router;