const router = require('express').Router();
const {
    createCategory,
    getCategories,
    getProdCategoriesByDesc
} = require('../controllers/CategoryController');

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:desc', getProdCategoriesByDesc);

module.exports = router;