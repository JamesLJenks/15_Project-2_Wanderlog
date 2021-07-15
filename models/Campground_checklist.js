const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}

Campgroud_post.init(
  {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
