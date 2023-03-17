const express = require('express');

const contractRouter = express.Router();

const contractController = require('../Controllers/contractController');

// get by id
contractRouter.get('/:contractId', contractController.getContractDetailsById);

contractRouter.get('/user/:userId', contractController.getContractDetailsByUser);

// Create Contract
contractRouter.post('/create', contractController.create);

// get contract status
contractRouter.get('/:contractId/status', contractController.getContractStatus);

contractRouter.post('/:contractId/status', contractController.setContractStatus);

module.exports = contractRouter;
