const { Destination } = require('../models');

exports.addDestination = async (req, res) => {
    const newDestination = await Destination.create(req.body);
    try {
        return res.status(201).json(newDestination);
    }
    catch (err) {
        return res.status(404).json(err.message);
    }
}