const Sequelize = require('sequelize');
const UserModel = require('./user');
const DestinationModel = require('./destination');
const ListModel = require('./list');

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

    connection.sync({alter: true});

    return { User, Destination, List };
}

module.exports = setupDatabase();