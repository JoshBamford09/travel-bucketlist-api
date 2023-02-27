module.exports = (connection, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        description: DataTypes.STRING, 
    };

    const DestinationModel = connection.define('Destination', schema);
    return DestinationModel;
}