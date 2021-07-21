console.log("***************** Creating our Campground Post model *****************")
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create our Campground Post model
class Campground_post extends Model {}

Campground_post.init(
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
            
    },
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  //   associate: models => {
  //     // 1 to many with campground_checklist
  //     User.hasMany(models.Campground_checklist, {
  //       foreignKey: 'campground_checklist',
  //     });
  //     return Campground_checklist;
  //   }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'campground_post'
  }
);

module.exports = Campground_post;
