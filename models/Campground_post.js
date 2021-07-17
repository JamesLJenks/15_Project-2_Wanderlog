const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Campground_post extends Model {}

Campgroud_post.init(
  {
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tripStart: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tripEnd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    campgroundName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locationCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locationState: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comfort: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 5,
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userStory: {
      type: DataTypes.STRING,
      allowNull: false
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
