const { Thought } = require('../models');


module.exports = {
    async getThought(req, res) {
    try {
        let thoughtData = await Thought.find();
        if (thoughtData) {
            res.status(200).json(thoughtData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
    async getThought(req, res) {
    try {
        let thoughtData = await Thought.find();
        if (thoughtData) {
            res.status(200).json(thoughtData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
}