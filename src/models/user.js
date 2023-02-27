module.exports = (connection, DataTypes) => {
    const schema = {
        username: DataTypes.STRING,
        email: DataTypes.STRING, 
    };

    const UserModel = connection.define('User', schema);
    return UserModel;
};