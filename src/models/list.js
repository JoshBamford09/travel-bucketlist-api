module.exports = (connection, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        destinations: DataTypes.JSON
    };

    const ListModel = connection.define('List', schema);
    return ListModel;
}