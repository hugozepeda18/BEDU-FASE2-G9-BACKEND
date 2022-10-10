const Category = require('../../models/CategoryModel');
const Product = require('../../models/ProductModel');
const validator = require('validator');

const createCategory = (req, res) => {
    var body = req.body;
    Category.create(body)
        .then(category => {
            res.status(201).json(category);
        });
}

const getCategories = async (req, res) => {
    await Category.findAll().then(categories => {
        if(categories.length <= 0){
            res.status(204).send('There are no categories.');
        }else{
            res.status(200).json(categories);
        }
    })
}

const getProdCategoriesByDesc = async(req, res) => {
    const {desc} = req.params;
    const category = await Category.findAll({
        where: {
            description: desc
        }
    });

    if(category == null || category.length <= 0){
        res.status(400).send('Missing category');
        return;
    }

    return await Product.findAll({
        where: {
            idCategory: category[0].idCategory
        }
    }).then(products => {
        if(products.length <= 0){
            res.status(204).send('There are no products for this category.');
        }else{
            res.status(200).json(products);
        }
    })

}

module.exports = {
    createCategory,
    getCategories,
    getProdCategoriesByDesc
}