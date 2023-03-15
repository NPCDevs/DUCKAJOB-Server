const express = require('express');
const router = express.Router();

const tagsController = require('../Controllers/tagsController');

// routers
const userRouter = require('./userRouter');
const jobRouter = require('./jobRouter');
const contractRouter = require('./contractRouter');
const applicationRouter = require('./applicationRouter');

// test
router.get('/', (req, res) => {
  res.status(200).send({ msg: 'Test' });
});
// search for tags (?name=name)
router.get('/tags', tagsController.search);

// TEST ADD TAG
// router.post('/tag', tagsController.add);

router.use('/users', userRouter);
router.use('/jobs', jobRouter);
router.use('/contracts', contractRouter);
router.use('/applications', applicationRouter);

module.exports = router;
