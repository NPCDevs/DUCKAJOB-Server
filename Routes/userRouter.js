const express = require('express');
const userRouter = express.Router();
const usersController = require('../Controllers/usersController');

// get user by id
userRouter.get('/:userId', usersController.getUser);

userRouter.get('/:userId/tags', usersController.getTags);

// get user by wallet
userRouter.get('/bywallet/:wallet', usersController.getUserInfoByWallet);

// auth => logged in || register
userRouter.post('/auth', usersController.authUser);

// register => logged in
userRouter.post('/register', usersController.register);

module.exports = userRouter;
