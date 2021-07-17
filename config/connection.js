const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'kfgk8u2ogtoylkq9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'c117dkwp1sqty9tr',
      password: 'cy3n6afdejti2zhb',
      database: 'y6tgc0qxxlfx47gn',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;