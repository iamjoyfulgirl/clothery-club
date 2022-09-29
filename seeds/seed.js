// const seedProduct = require('./product-seeds');
const sequelize = require('../config/connection');
const {
  User,
  Product
} = require('../models');
//  const userData = require('./userData');
const productData = require('./productData')
const userData = require('./userData.json')
const seedDatabase = async () => {
  await sequelize.sync({
    force: true
  });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const product of productData) {
    await Product.create({
      ...product,
    });
  }
  // await seedProduct();
  for (const user of userData) {
    await User.create({
      ...user,
    });
  }

  process.exit(0);
};

seedDatabase();