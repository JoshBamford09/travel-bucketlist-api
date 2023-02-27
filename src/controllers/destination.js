const { Destination } = require('../models');
const helper = require('./helper');

exports.addDestination = async (req, res) => {
    helper.addItem(res, req.body, Destination);
};

exports.getAllDestinations = async (req, res) => {
    helper.getAllItems(res, Destination);
};

exports.getDestination = async (req, res) => {
    helper.getItem(res, req.params.id, Destination);
};

exports.updateDestination = async (req, res) => {
    helper.updateItem(res, req.params.id, req.body, Destination);
};

exports.deleteDestination = async (req, res) => {
    helper.deleteItem(res, req.params.id, Destination);
};