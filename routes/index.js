var router = require('express').Router();

router.get('/', (res)=>{
  res.send('Welcome to Bedu-Shop API');
});

router.use('/Users', require('./UserRoute'));

module.exports = router;