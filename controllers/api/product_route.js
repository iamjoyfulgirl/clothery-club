const router = require('express').Router();
const { Product, User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/product/:id', async (req, res) => {
//   try {
//     const productData = await Product.findByPk(req.params.id, {
//       attributes: ['id', 'name', 'type', 'category', 'price', 'photo_url']
//     });
//     console.log('line 38', productData);

//     const product = productData.get({
//       plain: true
//     });
//     console.log('line 43', product);

//     res.render('product-details', { product });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const productsData = await Product.findAll({
//       include: [
//         {
//           model: Product,
//           attributes: ['products'],
//         },
//       ],
//     });

//     const products = productsData.map((products) => products.get({ plain: true }));

//     res.render('home', { 
//       projects: products, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/products/:id', async (req, res) => {
//   try {
//     const productsData = await Product.findByPk(req.params.id, {
//       include: [
//         {
//           model: Product,
//           attributes: ['products'],
//         },
//       ],
//     });

//     const products = productsData.get({ plain: true });

//     res.render('products', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/home', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('home', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/products');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
