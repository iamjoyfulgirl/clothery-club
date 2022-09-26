const {
    Model,
    DataTypes
  } = require('sequelize');
  // import our database connection from config.js
  const sequelize = require('../config/connection');
  
  // Initialize Product model (table) by extending off Sequelize's Model class
  class Cart extends Model {}
  
  // set up fields and rules for Product model
  Cart.init({
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_option_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product_option",
        key: "id"
      }
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  });
  
  module.exports = Cart;
  