const router = require('express').Router();
const { getThought, findThought, findOneThought, updateThought, deleteThought, addThoughtFriend, deleteFriend } = require('../../controllers/ThoughtController');

router.route('/').get(getThought).post(createThought)