const { User } = require("../models");
const helper = require('./helper');

exports.addUser = async (req, res) => {
    helper.addItem(res, req.body, User);
};

exports.getAllUsers = async (req, res) => {
    helper.getAllItems(res, User);
};

exports.getUser = async (req, res) => {
    helper.getItem(res, req.params.id, User);
};

exports.updateUser = async (req, res) => {
    helper.updateItem(res, req.params.id, req.body, User);
};

exports.deleteUser = async (req, res) => {
    helper.deleteItem(res, req.params.id, User);
};