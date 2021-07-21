console.log("Executing seeds/campground-post");
const { Campground_post } = require('../models');
const Campground_postData = [{
      id: 1,
      published: 1,
      tripStart: "June 5th, 2021",
      tripEnd: "June 6th, 2021",
      CampgroundName: "Traverse City State Campground",
      locationCity: "Traverse City",
      locationState: "Michigan",
      comfort: 5,
      title: "Went up north to traverse city, caught a fish!",
      userStory: "Well me and the lady go on and on up north and we finally caught a fish up here!",
   },{
    id: 2,
    published: 1,
    tripStart: "June 1st, 2021",
    tripEnd: "June 6th, 2021",
    CampgroundName: "Taquaminon Falls",
    locationCity: "Newberry",
    locationState: "Michigan",
    comfort: 5,
    title: "Saw a bear first time up north!",
    userStory: "Fell in the falls and saw bear foraging for berries"
   }
   ,{
    id: 3,
    published: 1,
    tripStart: "June 1st, 2021",
    tripEnd: "June 7th, 2021",
    CampgroundName: "Canadian National Campgroun",
    locationCity: "Ontario",
    locationState: "Quebec",
    comfort: 1,
    title: "Toilet was broke!",
    userStory: "Couldn't enjoy myself the toilet was broke!"
   }        
];
const seedCampground_posts = () => Campground_post.bulkCreate(Campground_postData);
module.exports = seedCampground_posts;