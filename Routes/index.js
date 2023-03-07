const express = require('express');
const router = express.Router();

const usersController = require('../Controllers/usersController');

router.get('/users/login', usersController.login);

router.get('/', (req, res) => {
  res.status(200).send({ msg: 'Test' });
});

module.exports = router;
