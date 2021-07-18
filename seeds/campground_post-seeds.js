const { Campground_post } = require('../models');

const Campground_postData = [{
    title: 'title one',
        date: 'July 18th, 2021',
        location: 'yellowstone park',
        image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
        },
        {
        title: 'title two',
        date: 'July 18th, 2021',
        location: 'yellowstone park',
        image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
        },
        {
        title: 'title three',
        date: 'July 18th, 2021',
        location: 'yellowstone park',
        image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
        },
        {
        title: 'title four',
        date: 'July 18th, 2021',
        location: 'yellowstone park',
        image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
        },
        {
        title: 'title five',
        date: 'July 18th, 2021',
        location: 'yellowstone park',
        image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
        },
        {
        title: 'title six',
        date: 'July 18th, 2021',
        location: 'yellowstone park',
        image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'

        }
];

const seedCampground_posts = () => Campground_post.bulkCreate(Campground_postData);

module.exports = seedCampground_posts;