const User = require('./User');
const Product = require('./Product');
const Cart = require('./Cart');

//cart relationship
User.hasOne(Cart, {
    foreignKey: 'user_id'
});

Cart.belongsTo(User, {
    foreignKey: 'user_id'
});

Cart.hasMany(Product, {
  foreignKey: 'cart_id'
});

Product.belongsTo(Cart, {
  foreignKey: 'cart_id'
});

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = {User, Cart, Product};

