const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Campground_checklist extends Model {}

Campgroud_checklist.init(
  {
    name: {
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
