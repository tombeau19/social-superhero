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
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//DELETE
router.get('/:id/delete', async (req, res) => {
    try {
        const id = User.findById(req.params.id).remove()
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router