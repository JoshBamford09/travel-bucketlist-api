const Sequelize = require('sequelize');
const UserModel = require('./user');
const DestinationModel = require('./destination');
const ListModel = require('./list');
const FavouriteModel = require('./favourite');

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

const setupDatabase = () => {
    const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
        host: PGHOST,
        port: PGPORT,
        dialect: 'postgres',
        logging: false,
    });

    const User = UserModel(connection, Sequelize);
    const Destination = DestinationModel(connection, Sequelize);
    const List = ListModel(connection, Sequelize);
    const Favourite = FavouriteModel(connection);

    // User.hasMany(List);
    // User.hasMany(Favourite);
    // List.belongsTo(User);
    // List.belongsToMany(Favourite, {through: 'ListFavourites'});
    // List.belongsToMany(Destination, {through: 'ListDestinations'});
    // Destination.belongsToMany(List, {through: 'ListDestinations'});
    // Destination.hasOne(Favourite);
    // Favourite.belongsTo(User);
    // Favourite.belongsToMany(List, {through: 'ListFavourites'});
    // Favourite.belongsTo(Destination);

    connection.sync({alter: true});

    return { User, Destination, List, Favourite };
}

module.exports = setupDatabase();