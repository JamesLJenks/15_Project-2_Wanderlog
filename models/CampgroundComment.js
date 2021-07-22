const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class CampgroundComment extends Model {}

CampgroundComment.init({
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
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'campground_post',
            key: 'id',
            unique: true
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'campground_comment'
});
module.exports = CampgroundComment;