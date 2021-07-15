const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Campground_post extends Model {}

Campgroud_post.init(
  {
    published: {
      type: DataTypes.BOOLEAN
    },
    tripStart: {
      type: DataTypes.STRING
    },
    tripEnd: {
      type: DataTypes.STRING
    },
    campgroundName: {
      type: DataTypes.STRING
    },
    locationCity: {
      type: DataTypes.STRING
    },
    locationState: {
      type: DataTypes.STRING
    },
    comfort: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    userStory: {
      type: DataTypes.STRING
    },
  },
  
  {
    sequelize,

    timestamps: true,
    underscored: true,
    modelName: 'campground_post'
  }
);

module.exports = Campground_post;
