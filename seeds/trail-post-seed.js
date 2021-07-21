const {Trail_post} = require('../models');
const Trail_postData = [{
    published: 1,
    trailDate: "July 18th, 2021",
    trailName: "Geddes Park",
    locationCity: "Ann Arbor",
    locationState: "Michigan",
    difficulty: "Easy",
    hikerExperience: "Expereienced",
    userStory: "Had a great time hiking with my son, will come back",
},
{
    published: 1,
    trailDate: "July 17th, 2021",
    trailName: "Huron Park",
    locationCity: "Ann Arbor",
    locationState: "Michigan",
    difficulty: "Medium",
    hikerExperience: "Experienced",
    userStory: "The goose ran me off the road!",
},
{
    published: 1,
    trailDate: "July 16th, 2021",
    trailName: "Traverse Trail",
    locationCity: "Traverse City",
    locationState: "Michigan",
    difficulty: "Tough",
    hikerExperience: "Experienced",
    userStory: "Got halfway up the hill and broke my ankle",
},
{
    published: 1,
    trailDate: "July 15th, 2021",
    trailName: "Huron Metro",
    locationCity: "Detroit",
    locationState: "Michigan",
    difficulty: "Easy",
    hikerExperience: "Experienced",
    userStory: "Ran from mutated fish down by River Raisen",
}
]
const seedTrail_posts = () => Trail_post.bulkCreate(Trail_postData);
module.exports = seedTrail_posts;