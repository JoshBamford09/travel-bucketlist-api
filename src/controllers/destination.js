const { Destination } = require('../models');
const helper = require('./helper');

exports.addDestination = async (req, res) => {
    helper.addItem(res, req.body, Destination);
}