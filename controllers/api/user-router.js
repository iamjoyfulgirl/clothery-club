const router = require('express').Router();
const {
    User,
    Product,
    Cart
} = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method
    User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: req.params.id
            },
            include: {
                model: Cart,
                attributes: ['id', 'product_option_id'],
                include: {
                    model: ProductOption,
                    attributes: ['product_id', 'option_id', 'value_id', 'quantity', 'photo_id'],
                    include: [{
                            model: Product,
                            attributes: ['product_name', 'price', 'quatity']
                        },
                        {
                            model: Option,
                            attributes: ['option_name']
                        },
                        {
                            model: Value,
                            attributes: ['value_name']
                        },
                        {
                            model: Photo,
                            attributes: ['filename']
                        }
                    ]
                }
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        });
});

// LOGIN
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({
                message: 'No user with that email address!'
            });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect password!'
            });
            return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({
                user: dbUserData,
                message: 'You are now logged in!'
            });
        });
    });
});

// Logout router
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});