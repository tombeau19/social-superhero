const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'Your Name',
        required: true,
    },
    superHeroName: {
        type: String,
        default: 'Superhero Name!',
        required: true,
    },
    password: {
        type: String,
        default: 'password',
    },
    age: Number,
    Score: Number
})

const situationSchema = mongoose.Schema({
    title: {
        type: String,
        default: `'Sitch Title`,
        required: true,
    },
    description: {
        type: String,
        default: `'Sitch Description`,
        required: true,
    },
    response: {
        type: String,
        default: `'Sitch Response`,
        required: true
    },
    comment: String
})

const settingSchema = mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    situations: [situationSchema]
})

const User = mongoose.model('User', userSchema)
const Setting = mongoose.model('Setting', settingSchema)
const Situation = mongoose.model('Situation', situationSchema)

module.exports = {
    User, Setting, Situation
}



