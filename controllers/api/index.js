const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const campground_post_routes = require('./camppost-routes');
const postRoutes = require('./blogpostRoutes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/campposts' , campground_post_routes);


module.exports = router;