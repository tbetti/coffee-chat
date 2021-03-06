const router = require('express').Router();
const { User } = require('../../models');

router.post('/register', async (req, res) => {
    // console.log(req.body);
    try {
        const userData = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        );

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.user_name = userData.name;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    // render template with Sequelize data

    try {
        // console.log(req.body);

        // checking user email, if it exists in our database
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // checking user password, for hashed password in database associated with the email 
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // if both email and password are correct will change logged_in to true
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.user_name = userData.name;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });

        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // it ends the session when the user logs out
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;