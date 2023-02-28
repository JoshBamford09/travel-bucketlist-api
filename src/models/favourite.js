module.exports = (connection) => {
    const schema = {};

    const FavouriteModel = connection.define('Favourite', schema);
    return FavouriteModel;
}