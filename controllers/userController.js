const { User, Thoughts } = require('../models');
const { find } = require('../models/User');

module.exports = {
    async getUser(req, res) {
    try {
        let userData = await User.create(req.body);
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch (err) {
        res.status(500).json(err)
    }
},
async findUser(req, res) {
    try {
        let userData = await User.find().populate('thoughts').populate('friends');
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async findOneUser(req, res) {
    try {
        let userData = await User.findOne({_id: req.params.id}).populate('thoughts').populate('friends');
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async updateUser(req, res) {
    try {
        let userData = await User.findOneAndUpdate({_id: req.params.id}, req.body,{returnOriginal: false});
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async deleteUser(req, res) {
    try {
        let userData = await User.findOneAndDelete({_id: req.params.id});
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async addUserFriend(req, res) {
    try {
        let userData = await User.findOneAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}},{returnOriginal: false});
        let userDataRemove = await User.findOneAndUpdate({_id: req.params.friendId}, {$push: {friends: req.params.id}},{returnOriginal: false});
        if (userData) {
            res.status(200).json(userData)
        } else {
            res.status(404).json('Error!')
        }
    } catch {
        res.status(500).json('Server Error!')
    }
},
async deleteFriend(req, res) {
    try {
        let userData = await User.findOneAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}},{returnOriginal: false});
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