const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'jkohn',
        email: 'jkohn@gmail.com'

    },
    {
        username: 'Jake',
        password: 'jake',
        email: 'jakejake@gmail.com'
    },
    {
        username: 'Joe',
        password: 'joe',
        email: 'joejoe@gmail.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;