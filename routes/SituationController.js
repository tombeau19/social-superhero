const express = require('express')
const { User, Setting, Situation } = require('../db/schema')
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

// SHOW
router.get('/:situationId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const settings = await user.settings.id(req.params.settingId)
        const situation = await settings.situations.id(req.params.situationId)
        res.json(situation)
    } catch (err) {
        res.send(err)
    }
})

// NEW - Empty Situation
router.post('/', async (req, res) => {
    try {
        const newSituation = new Situation()
        const user = await User.findById(req.params.userId)
        const setting = await user.settings.id(req.params.settingId)
        setting.situations.push(newSituation)
        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//UPDATE
router.patch('/:situationId', async (req, res) => {
    try {
        const updatedSituation = req.body.situation
        const user = await User.findById(req.params.userId)
        const setting = await user.settings.id(req.params.settingId)
        const situation = setting.situations.id(req.params.situationId)
        situation.title = updatedSituation.title
        situation.description = updatedSituation.description
        situation.response = updatedSituation.response
        situation.comment = updatedSituation.comment
        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

// DELETE DELETE
router.delete('/:situationId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const setting = await user.settings.id(req.params.settingId)
    }
})



module.exports = router