console.log("************ CREATING OUR TRAIL CHECKLIST MODEL ****************");
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Trail_checklist extends Model {}
Trail_checklist.init(
  {
    sunscreen: {
      type: DataTypes.BOOLEAN
    },
    bugspray:{ 
      type: DataTypes.BOOLEAN
    },
    waterbottle: {
      type: DataTypes.BOOLEAN
    },
    boots : {
      type: DataTypes.BOOLEAN
    },
    rainjacket : {
      type: DataTypes.BOOLEAN
    },
    cleats : {
      type: DataTypes.BOOLEAN
    }, 
    climbingrope : {
      type: DataTypes.BOOLEAN
    },
    bearspray : {
      type: DataTypes.BOOLEAN
    },
    orv : {
      type: DataTypes.BOOLEAN
    },
    atv : {
      type: DataTypes.BOOLEAN
    },
    snowmobile: {
      type: DataTypes.BOOLEAN
    },
    trailsidecamping: {
      type: DataTypes.BOOLEAN
    },
    bathroom : {
      type: DataTypes.BOOLEAN
    },
    waterfountain: {
      type: DataTypes.BOOLEAN
    },
    petfriendly: {
      type: DataTypes.BOOLEAN
    },
    wateraccess: {
      type: DataTypes.BOOLEAN
    },
    wheelchairaccessible: {
      type: DataTypes.BOOLEAN
    },
    steepterrain: {
      type: DataTypes.BOOLEAN
    },
    stairs:
    {
      type: DataTypes.BOOLEAN
    },
    looseground: {
      type: DataTypes.BOOLEAN
    },
    overhang: {
      type: DataTypes.BOOLEAN
    },
    damp : {
      type: DataTypes.BOOLEAN
    },
    cliff: {
      type: DataTypes.BOOLEAN
    },
    fallentrees: {
      type: DataTypes.BOOLEAN
    },
    bridge: {
      type: DataTypes.BOOLEAN
    },
    dangerouswildlife: 
    {
      type: DataTypes.BOOLEAN
    },
    tightspaces: {
      type: DataTypes.BOOLEAN
    },
    outlook: {
      type: DataTypes.BOOLEAN
    },
    waterfall: {
      type: DataTypes.BOOLEAN
    },
    river: {
      type: DataTypes.BOOLEAN
    },
    ocean: {
      type: DataTypes.BOOLEAN
    },
    rockformations: {
      type: DataTypes.BOOLEAN
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'trail_checklist'
  }
);
module.exports = Trail_checklist;