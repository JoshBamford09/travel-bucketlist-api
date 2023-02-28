const { List } = require('../models');
const helper = require('./helper');

exports.addList = (req, res) {
    helper.addItem(res, req.body, List);
};

exports.getAllLists = async (req, res) => {
    helper.getAllItems(res, List);
};

exports.getList = async (req, res) => {
    helper.getItem(res, req.params.id, List);
};

exports.updateList = async (req, res) => {
    helper.updateItem(res, req.params.id, req.body, List);
};

exports.deleteList = async (req, res) => {
    helper.deleteItem(res, req.params.id, List);
};