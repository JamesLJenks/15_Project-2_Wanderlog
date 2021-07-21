console.log('********** CREATING CAMPGROUND CHECKLIST MODEL ****************');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Campground_checklist extends Model {}
Campground_checklist.init(
{   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    forest: {
      type: DataTypes.BOOLEAN
    },
    hiking: {
      type: DataTypes.BOOLEAN
    },
    biking: {
      type: DataTypes.BOOLEAN
    },
    orv : {
      type: DataTypes.BOOLEAN
    }, 
    water:  {
      type: DataTypes.BOOLEAN
    },
    beach : {
      type: DataTypes.BOOLEAN
    },
    boating : {
      type: DataTypes.BOOLEAN
    },
    fishing : {
      type: DataTypes.BOOLEAN
    },
    pool : {
      type: DataTypes.BOOLEAN
    },
    washroom : {
      type: DataTypes.BOOLEAN
    },
    laundry: {
      type: DataTypes.BOOLEAN
    },
    campstore: {
      type: DataTypes.BOOLEAN
    },
    ice : {
      type: DataTypes.BOOLEAN
    },
    firepit: {
      type: DataTypes.BOOLEAN
    },
    electricity: {
      type: DataTypes.BOOLEAN
    },
    kidfriendly: {
      type: DataTypes.BOOLEAN
    },
    petfriendly: {
      type: DataTypes.BOOLEAN
    },
    alcohol: {
      type: DataTypes.BOOLEAN
    },
    dogpark : {
      type: DataTypes.BOOLEAN
    },
    Terrain : {
      type: DataTypes.STRING
    },
    Amenities : {
      type: DataTypes.STRING
    },
    recreation: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'campground_checklist'
  }
);
module.exports = Campground_checklist;