const express = require('express');

const contractRouter = express.Router();

const contractController = require('../Controllers/contractController');

// get by id
contractRouter.get('/:contractId', contractController.getContractDetailsById);

contractRouter.get('/user/:userId', contractController.getContractDetailsByUser);

// Create Contract
contractRouter.post('/create', contractController.create);

module.exports = contractRouter;
