const Sale = require('../../models/SalesModel');
const validator = require('validator');

const createSale = (req, res) => {
    var {body} = req;
    Sale.create(body)
        .then(sale => {
            res.status(201).json(sale);
        })
}

module.exports = {
    createSale
}