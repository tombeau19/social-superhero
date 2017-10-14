const express = require('express')
const { Setting } = require('../db/schema')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const settings = await Setting.find({})
        res.json(settings)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router