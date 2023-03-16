const express = require('express');
const tagRouter = express.Router();

const tagsController = require('../Controllers/tagsController');

tagRouter.get('/', tagsController.search);

module.exports = tagRouter;
