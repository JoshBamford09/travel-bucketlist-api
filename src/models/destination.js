module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'You must enter a name for the destination.'
                },
                notEmpty: {
                    args: true,
                    msg: 'You cannot leave the destination name empty.'
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'You must enter a description for the destination.'
                },
                notEmpty: {
                    args: true,
                    msg: 'You cannot leave the description empty.'
                }
            }
        },
        country: {
            type: DataTypes.STRING
        }
    };

    const DestinationModel = connection.define('Destination', schema);
    return DestinationModel;
}