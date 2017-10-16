const express = require('express')
const { User, Setting, Situation } = require('../db/schema')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        console.log(user)
        const setting = await user.setting.id(req.params.settingId)
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router