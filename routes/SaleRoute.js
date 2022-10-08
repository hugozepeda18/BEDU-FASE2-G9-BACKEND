const router = require('express').Router();
const {
    createSale
} = require('../controllers/SaleController');

router.post('/', createSale);

module.exports = router;