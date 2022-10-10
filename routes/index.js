var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Welcome to Bedu-Shop API');
});

router.use('/users', require('./UserRoute'));
router.use('/Users/Types', require('./TypeUserRoute'));
router.use('/products', require('./ProductRoute'));
router.use('/categories', require('./CategoryRoute'));
router.use('/sales', require('./SaleRoute'));

module.exports = router;