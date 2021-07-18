const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        validate: {

            len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // associate: models => {
    //     // 1 to many with campground_post
    //     Comment.hasMany(models.Campground_post, {
    //       foreignKey: 'campground_post',
    //     });
    //     return Campground_post;
    // },
    // associate: models => {
    //     // 1 to many with trail_post
    //     Comment.hasMany(models.Trail_post, {
    //       foreignKey: 'Trail_post',
    //     });
    //     return Trail_post;
    // },
    // associate: models => {
    //     // 1 to many with user
    //     Comment.hasMany(models.User, {
    //       foreignKey: 'creator',
    //     });
    //     return User;
    // },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});
module.exports = Comment;