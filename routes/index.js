var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Welcome to Bedu-Shop API');
});

router.use('/Users', require('./UserRoute'));
router.use('/Users/Types', require('./TypeUserRoute'));

module.exports = router;