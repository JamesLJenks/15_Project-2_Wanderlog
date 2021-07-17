const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Trail_post extends Model {}
Trailpost.init(
    {
      published: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      trailDate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      trailName: {
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
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 5,
        }
      },
      hikerExperience: {
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
      modelName: 'trail_post'
    }
  );
  
  module.exports = Trail_post;