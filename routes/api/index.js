const router = require('express').Router();
const thoughtRoutes = require('express').Router();
const userRoutes = require('express').Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;