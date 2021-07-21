console.log('******************Executing seeds/index.js ******************')
const sequelize = require('../config/connection');
const seedCampground_posts = require ('./campground-post-seed');
const seedCampground_checklist = require ('/campground_checklist-seed');
const seedTrail_posts = require ('/trail-post-seed');
const seedTrail_checklist = require ('/trail-checklist-seed');





const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedCampground_posts();
    await seedCampground_checklist();
    await seedTrail_posts();
    await seedTrail_checklist();
    process.exit(0);
};

seedAll();