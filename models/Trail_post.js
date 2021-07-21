console.log('********** CREATING OUR TRAIL POST MODEL ************')
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Trail_post extends Model {}
Trail_post.init(
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
      //was not originally in code should be included commenting out for now
      //title: {
        //type: DataTypes.STRING,
        //allowNull: false
      //},
      userStory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // associate: models => {
      //   // 1 to many with trail_checklist
      //   User.hasMany(models.Trail_checklist, {
      //     foreignKey: 'trail_checklist',
      //   });
      //   return Trail_checklist;
      // },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'trail_post'
    }
  );
  
  module.exports = Trail_post;