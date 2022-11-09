const router = require('express').Router();
const { getThought, formThought, getOneThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(formThought).put(updateThought).delete(deleteThought);
router.route('/:id').get(getOneThought);
router.route('/:id/reactions').post(addReaction).delete(deleteReaction)


module.exports = router;