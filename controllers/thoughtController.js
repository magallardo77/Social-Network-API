const { Thought, User } = require('../models');


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
    async getOneThought(req, res) {
    try {
        let thoughtData = await Thought.findOne({_id: req.params.id});
        if (thoughtData) {
            res.status(200).json(thoughtData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
    async formThought(req, res) {
    try {
        let thoughtData = await Thought.create(req.body);
        let newThoughtData = await User.findOneAndUpdate({_id: req.body.userId}, {$push: {thoughts: thoughtData._id}});
        if (thoughtData && newThoughtData) {
            res.status(200).json(thoughtData)
        } else {
            res.status(404).json('Error!')
        }
    } catch(err) {
        throw err;
        res.status(500).json(err)

    }
},
    async updateThought(req, res) {
    try {
        let thoughtData = await Thought.findOneAndUpdate({_id: req.body._id}, req.body,{returnOriginal: false});
        if (thoughtData) {
            res.status(200).json(thoughtData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
    async deleteThought(req, res) {
    try {
        let thoughtData = await Thought.findOneAndDelete({_id: req.body._id}, {returnOriginal: false});
        if (thoughtData) {
            res.status(200).json(thoughtData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async addReaction(req, res) {
    try {
        let userData = await Thought.findOneAndUpdate({_id: req.params.id}, {$push: {reactions: req.body}},{returnOriginal: false});
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async deleteReaction(req, res) {
    try {
        let userData = await Thought.findOneAndUpdate({_id: req.params.id}, {$pull: {reactions: {reactionId: req.body.reactionId}}},{returnOriginal: false});
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
}