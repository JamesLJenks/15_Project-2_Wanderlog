const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Like extends Model {}

Like.init(
    {
      associate: models => {
        // 1 to many with campground_checklist
        Like.hasMany(models.Campground_post, {
          foreignKey: 'campground_post',
        });
        return Campground_post;
      },
      associate: models => {
        // 1 to many with trail_post
        Like.hasMany(models.Trail_post, {
          foreignKey: 'checklist_post',
        });
        return Trail_post;
      },
      associate: models => {
        // 1 to many with user
        Like.hasMany(models.User, {
          foreignKey: 'user',
        });
        return User;
      }
 
    }
  );
  
  module.exports = Like;