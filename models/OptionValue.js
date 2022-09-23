const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class Value extends Model {}

Value.init( //it includes: orange, red, small, medium,.....)
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        option_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "option",
              key: "id"
            }
        },
        value_name: {
            type: DataTypes.STRING
        }

    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'value',
    }
);

module.exports = Value;