const express = require('express')
const { Setting } = require('../db/schema')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const userId = req.params.userId
        const setting = 
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router