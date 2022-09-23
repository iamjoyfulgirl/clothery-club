const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class Photo extends Model {}

Photo.init( //(option: color and size)
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "product",
                key: "id"
            }
        },
        option_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "option",
                key: "id"
            }
        },
        value_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "value",
                key: "id"
            }
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'photo',
    }
);

module.exports = Photo;