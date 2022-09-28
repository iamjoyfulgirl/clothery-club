const router = require('express').Router();
const { Products, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productsData = await Products.findAll({
      include: [
        {
          model: User,
          attributes: ['products'],
        },
      ],
    });

    const products = productsData.map((products) => products.get({ plain: true }));

    res.render('homepage', { 
      projects: products, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productsData = await Products.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['products'],
        },
      ],
    });

    const products = productsData.get({ plain: true });

    res.render('products', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('home', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/products');
    return;
  }

  res.render('login');
});

module.exports = router;
