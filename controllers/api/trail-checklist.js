const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail_checklist } = require('../../models');
const withAuth = require('../utils/auth');

//Get ALL Trail Checlist items
router.get('/', withAuth, (req, res) => {
    Trail_checklist.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'name',
                'icon',
                'created_at'
            ],
            include: [{
                    model: Trail_checklist,
                    attributes: ['id', 'name', 'icon', 'created_at'],
             } ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/new', (req, res) => {
    res.render('new-trail-checklist');
});



module.exports = router;