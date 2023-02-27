const Sequelize = require('sequelize');
const UserModel = require('./user');
const DestinationModel = require('./destination');

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

    connection.sync({alter: true});

    return { User, Destination };
}

module.exports = setupDatabase();