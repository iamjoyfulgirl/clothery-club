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
        },
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        photo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "photo",
                key: "id"
            }
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productoption',
    }
);

module.exports = ProductOption;