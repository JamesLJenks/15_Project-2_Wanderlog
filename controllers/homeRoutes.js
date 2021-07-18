const router = require('express').Router();
const sequelize = require('../config/connection');
const { Campground_Post, Trail_Post, Campground_Checklist, Trail_Checklist, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/camp-form', (req, res) => {
    res.render("camp-form") 
})

router.get('/camp-post', (req, res) => {
    res.render("camp-post") 
})

router.get('/choose-path', (req, res) => {
    res.render("choose-path")
})

router.get('/global-dashboard', (req, res) => {
    res.render("global-dashboard") 
})

router.get('/landing-page', (req, res) => {
    res.render("landing-page") 
})

router.get('/login', (req, res) => {
    res.render("login") 
})

router.get('/signup', (req, res) => {
    res.render("signup") 
})

router.get('/trail-form', (req, res) => {
    res.render("trail-form") 
})

router.get('/trail-post', (req, res) => {
    res.render("trail-post") 
})

router.get("/user-dashboard", (req, res)=> {

    /*
        TODO
        In order to get the data from the db instead, 
        make a query before the render either right here
        or better yet in another controller file. 

        That query will get you data from your api/db, 
        and then you can pass that as an object the render

        ex psuedocode: 

        let queryData = await api.query()
        res.render('user-dashboard', queryData)


    */
    res.render('user-dashboard', {
        campposts:  [
            {
                title: 'Sleepy Night',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                user: 'Snow White',
                image: 'https://picsum.photos/id/237/320/240'
            },
            {
                title: 'Twilight Encounter',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                user: 'John Smith',
                image: 'https://picsum.photos/id/237/320/240'
            },
            {
                title: 'Hungry Bear',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                user: 'Yogi Bear',
                image: 'https://picsum.photos/id/237/320/240'
            },
        ]
    })
})



//make routes for remaining handlebar files

router.get('/', (req, res) => {
    // Camground_Post.findAll({
    //         where: {
    //             user_id: req.session.user_id
    //         },
    //         attributes: [
    //             'id',
    //             'title',
    //             'content',
    //             'created_at'
    //         ],
    //         include: [{
    //                 model: Comment,
    //                 attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //                 include: {
    //                     model: User,
    //                     attributes: ['username']
    //                 }
    //             },
    //             {
    //                 model: User,
    //                 attributes: ['username']
    //             }
    //         ]
    //     })
    //     .then(dbPostData => {
    //         const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('landing-page');
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });
});

// router.get('/', withAuth, (req, res) => {
//     Camground_Post.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             attributes: [
//                 'id',
//                 'title',
//                 'content',
//                 'created_at'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({ plain: true }));
//             res.render('dashboard', { posts, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/new', (req, res) => {
    res.render('user-dashboard');
});



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('user-dashboard');
        return;
    }
    res.render('login');
});




module.exports = router;