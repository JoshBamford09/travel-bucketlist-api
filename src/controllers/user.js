const { User } = require("../models");

exports.addUser = async (req, res) => {
    const newUser = await User.create(req.body);
    try {
        return res.status(201).json(newUser);
    }
    catch (err) {
        return res.status(404).json(err.message);
    }
};