const express = require('express');

const contractRouter = express.Router();

const contractController = require('../Controllers/contractController');

// Create Contract
contractRouter.post('/create', contractController.create);

module.exports = contractRouter;
