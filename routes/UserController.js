const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

//INDEX
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

//SHOW
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})

//NEW - CREATE
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body.user)
        newUser.settings.push({
            location: "Home", 
            situations: []
        }, 
        {
            location: "School", 
            situations: []
        }, 
        {
            location: "Community", 
            situations: []
        })
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).remove()
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router