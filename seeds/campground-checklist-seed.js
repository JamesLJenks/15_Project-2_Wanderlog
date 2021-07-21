const { Campground_post } = require('../models');
const Campground_checklistData = [{
  forest: 1,
  hiking: 1,
  biking: 1,
  orv: 1,
  water: 1,
  beach: 1,
  boating: 0,
  fishing: 1,
  pool: 1,
  washroom: 1,
  laundry: 1,
  campstore: 1,
  ice: 1,
  firepit: 1,
  electricty: 1,
  kidfriendly: 1,
  petfriendly: 1,
  alcohol: 0,
  dogpark: 1,
  Terrain: 0,
  Amenities: "Lodge",
  recreation:"Baseball, Swimming Pool"
  }
];
const seedCampground_checklist = () => Campground_post.bulkCreate(Campground_checklistData);
module.exports = seedCampground_checklist;