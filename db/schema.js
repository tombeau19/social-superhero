const mongoose = require('mongoose')

const situationSchema = mongoose.Schema({
    title: {
        type: String,
        default: `'Sitch Title`,
    },
    description: {
        type: String,
        default: `'Sitch Description`,
    },
    response: {
        type: Array,
        default: `'Sitch Response`,
    },
    comment: String
})

const settingSchema = mongoose.Schema({
    location: {
        type: String,
    },
    situations: [situationSchema]
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'Your Name',
    },
    superHeroName: {
        type: String,
        default: 'Superhero Name!',
    },
    password: {
        type: String,
        default: 'password',
    },
    settings: [settingSchema],
    Score: Number
})

const User = mongoose.model('User', userSchema)
const Setting = mongoose.model('Setting', settingSchema)
const Situation = mongoose.model('Situation', situationSchema)

module.exports = {
    User, Setting, Situation
}



