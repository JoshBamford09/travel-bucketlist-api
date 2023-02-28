const { Favourite } = require('../models');
const helper = require('./helper');

exports.addFavourite = (req, res) => {
    helper.addItem(res, req.body, Favourite);
}