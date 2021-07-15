const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Trail_checklist extends Model {}

Trail_checklist.init(
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
    modelName: 'trail_checklist'
  }
);

module.exports = Trail_checklist;