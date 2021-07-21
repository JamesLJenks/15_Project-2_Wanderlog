console.log("******** EXECUTING models/index.js **********") ;
const CampgroundChecklist = require('./Campground_checklist');
const Campground_Post = require('./Campground_post');
const CampgroundComment = require('./CampgroundComment');
const TrailChecklist = require('./Trail_checklist');
const TrailPost = require('./Trail_post');
const User = require('./User');

User.hasMany(Campground_Post, {
    foreignKey: 'user_id'
});
Campground_Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: "cascade"
});
// CampgroundComment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });
// CampgroundComment.belongsTo(CampgroundPost, {
//     foriegnKey: 'post_id',
//     onDelete: "cascade"
// });
// User.hasMany(CampgroundComment, {
//     foreignKey: 'user_id',    
// });
// CampgroundPost.hasMany(CampgroundComment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// });
// User.hasMany(TrailPost, {
//     foreignKey: 'user_id'
// });
// TrailPost.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });
// Comment.belongsTo(TrailPost, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })
// TrailPost.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })
// CampgroundChecklist.belongsTo(CampgroundPost, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })
// TrailChecklist.belongsTo(TrailPost, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })



module.exports = {Campground_Post,TrailPost,User}