const sequelize = require('../config/connection');
const { User, Product } = require('../models');

//  const userData = require('./userData.json');
// const projectData = require('./projectData.json');
const productData = require('./productData.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  const products = await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
