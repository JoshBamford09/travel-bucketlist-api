const Sequelize = require('sequelize');
const UserModel = require('./user');

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

const setupDatabase = () => {
    const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
        host: PGHOST,
        port: PGPORT,
        dialect: 'postgres',
        logging: false,
    });

    const User = UserModel(connection, Sequelize);
    connection.sync({alter: true});

    return { User };
}

module.exports = setupDatabase();