const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class ProductOption extends Model {}

ProductOption.init( //(option: color and size)
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
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_option',
    }
);

module.exports = ProductOption;