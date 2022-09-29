// const seedProduct = require('./product-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');
const { Product } = require('../models');
//  const userData = require('./userData');
const productData = require('./productData')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const product of productData) {
    await Product.create({
      ...product,
    });
    // await seedProduct();
    await seedUsers();

    process.exit(0);
};

seedAll();
