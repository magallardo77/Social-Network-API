const router = require('express').Router();
const { getUser, findUser, findOneUser, updateUser, deleteUser, addUserFriend, deleteFriend } = require('../../controllers/userController');

router.route('/').get(findUser).post(getUser)
router.route('/:id').get(findOneUser).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendId').post(addUserFriend).delete(deleteFriend);



module.exports = router;

