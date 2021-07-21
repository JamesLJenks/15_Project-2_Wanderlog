const router = require('express').Router();

const userRoutes = require('./userRoutes.js');

const campground_post_routes = require('./campground-post');
const postRoutes = require('./blogpostroutes');


const commentRoutes = require('./comment-routes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/campground_post_routes' , campground_post_routes);


module.exports = router;