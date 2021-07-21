const router = require('express').Router();
const { Campground_post } = require('../../models');
const withAuth = require('../../utils/auth');

//GET all CAMPGROUND_POST for homepage
router.get('/campground_post', withAuth, async (req, res) => {
    try {
        const dbCampPostData = await Campground_post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'published',
                'tripStart',
                'tripEnd',
                'campgroundName',
                'locationCity',
                'locationState',
                'comfort',
                'title',
                'userStory',
                'created_at'
            ],
            include: [{
                model: User,
                attributes: ['username']
            },
            ]
        })
             const posts = dbCampPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
    });

//GET one CAMPGROUND_POST
router.get('/campground_post:id', withAuth, (req, res) => {
    Campground_post.findOne({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'published',
                'tripStart',
                'tripEnd',
                'campgroundName',
                'locationCity',
                'locationState',
                'comfort',
                'title',
                'userStory',
                'created_at'
            ],
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { Campground_post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

//POST CAMPGROUND_POST Data
router.post('/campground_post', withAuth, (req, res) => {
           Campground_post.create({
               published: req.body.published,
               tripStart: req.body.tripStart,
               tripEnd: req.body.tripEnd,
               campgroundName: req.body.campgroundName,
               locationCity: req.body.locationCity,
               locationState: req.body.locationState,
               comfort: req.body.comfort,
               title: req.body.title,
               userStory: req.body.userStory,
               user_id: req.session.user_id,
            }            
        )
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { Campground_post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

// Update Campground Post
router.put('/campground_post:id', withAuth, (req, res) => {
    Campground_post.put(
        {
        title: req.body.title,
        content: req.body.content
        }, 
        {
        where: {
            id: req.params.id
        }
        }
    ).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Delete Trail Post
router.delete('/campground_post:id', withAuth, (req, res) => {
    Campground_post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




//Delete Campground Post


module.exports = router;