const express = require('express')
const { Situation } = require('../db/schema')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router