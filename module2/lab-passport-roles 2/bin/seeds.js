const mongoose = require('mongoose')
const Celebrity = require('../models/user.model')
const Movie = require('../models/course.model')

const dbName = 'roles';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const Users = [{
        username: 'damian',
        name: 'Damian Lago',
        password: 'caramelo',
        profileImg: '',
        description: '',
        facebookId: '',
        role: 'BOSS'
    },
    {
        username: 'test',
        name: 'test',
        password: 'test',
        profileImg: '',
        description: '',
        facebookId: '',
        role: 'BOSS'
    }
]
User.create(users)
    .then(newUser => console.log(newUser))
    .catch(err => console.log(err))