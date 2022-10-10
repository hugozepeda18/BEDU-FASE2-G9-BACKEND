const Product = require('../../models/ProductModel');
const validator = require('validator');

const createProduct = (req, res) => {
    var {body} = req;
    Product.create(body)
        .then(product => {
            res.status(201).json(product);
        })
}

const getProducts = async (req, res) => {
    await Product.findAll().then(products => {
        if(products.length <= 0){
            res.status(204).send('There are no products.');
        }else{
            res.status(200).json(products);
        }
    })
}

const getProductByProdName = async (req, res) => {
    const {prodName} = req.params

    await Product.findAll({
        where: {
            description: prodName
        }
    }).then(products => {
        if(products.length <= 0){
            res.status(204).send('There are no products.');
        }else{
            res.status(200).json(products[0]);
        }
    })
}

const updateProduct = (req, res) => {
    var { body } = req;
    var { idProduct } = req.params;
    Product.update(body, {
        where: {
            idProduct: idProduct
        }
    })
    .then(product => {
        res.status(200).json({updated: true});
    })
}

const deleteProduct = (req, res) => {
    var { idProduct } = req.params;
    Product.destroy({
        where: {
            idProduct: idProduct
        }
    })
    .then(product => {
        res.status(200).json({ removed: true });
    })
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getProductByProdName
}