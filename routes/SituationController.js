const express = require('express')
const { User, Setting, Sitution } = require('../db/schema')
const router = express.Router({ mergeParams: true })

// INDEX ROUTE
router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const setting = await user.settings.id(req.params.settingId)
        const situations = await setting.situations
        res.json(situations)
    } catch (err) {
        res.send(err)
    }
})



module.exports = router