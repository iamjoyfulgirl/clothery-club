const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Type extends Model {}

Type.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    type_name: {                       //(3 type: woman, man, footwear)
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'type',
  }
);

module.exports = Type;