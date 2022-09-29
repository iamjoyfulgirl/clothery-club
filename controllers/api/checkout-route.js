const router = require('express').Router();
const { Product, User } = require('../../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res, next) => {
    res.redirect(3001, '/checkout');
});

router.get('/cart-item', (req, res, next) => {
    res.render('index', {
       title: 'Checkout',
       section: 'info'
    });
});

router.get('/cart', (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/product');
        return;
    }

    const { user } = req.session;

    if(!user.product) {
        res.redirect('/product');
        return;
    }

    res.render('cart', {
        title: 'Payment',
        section: 'payment',
        user
    });
});