const { User } = require("../models");
const helper = require('./helper');

exports.addUser = async (req, res) => {
    helper.addItem(res, req.body, User);
};