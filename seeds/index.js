const seedCampground_posts = require ('./campground_post-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedCampground_posts();
    process.exit(0);
};

seedAll();