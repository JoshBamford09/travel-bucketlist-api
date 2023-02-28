module.exports = (connection) => {
    const schema = {};

    const FavouriteModel = connection.define('Destination', schema);
    return FavouriteModel;
}