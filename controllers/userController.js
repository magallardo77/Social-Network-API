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
    } catch {
        res.status(500).json('Server Error!')
    }
},
async findUser(req, res) {
    try {
        let userData = await User.find();
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
        let userData = await User.findOne({_id: req.params._id});
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
        let userData = await User.findOneAndUpdate({_id: req.params._id}, req.body,{returnOriginal: false});
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
        let userData = await User.findOneAndUpdate({_id: req.params._id});
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
        let userData = await User.findOneAndUpdate({_id: req.params._id}, {$push: {friends: req.params.friendId}},{returnOriginal: false});
        let userDataRemove = await User.findOneAndUpdate({friends: req.params.friendId}, {$push: {_id: req.params._id}},{returnOriginal: false});
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
        let userData = await User.findOneAndUpdate({_id: req.params._id}, {$push: {friends: req.params.friendId}},{returnOriginal: false});
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