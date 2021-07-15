const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}

Campgroud.init(
  {
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    }
  },
  {

    sequelize,

    timestamps: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
