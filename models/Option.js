const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Option extends Model {}

Option.init(                 //(option: color and size)
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "type",
        key: "id"
      }
    },
    option_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'option',
  }
);

module.exports = Option;