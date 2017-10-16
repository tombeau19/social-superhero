const express = require('express')
const { User, Setting, Situation } = require('../db/schema')
const router = express.Router({ mergeParams: true })


// INDEX ROUTE
router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const settings = await user.settings
        res.json(settings)
    } catch (err) {
        res.send(err)
    }
})

// SHOW
router.get('/:settingId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const setting = await user.settings.id(req.params.settingId) 
        res.json(setting)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router