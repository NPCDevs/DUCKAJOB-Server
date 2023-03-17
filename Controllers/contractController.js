//const ton = require('../Ton/tonConnect');
const Contract = require('../Models/contractModel');
const CreateContract = require('../Ton/tonCreateContract.js');

class contractController {
  async create(req, res) {
    const {
      jobId,
      buyerId,
      sellerId,
      contractAddress,
      seller_wallet,
      buyer_wallet,
      disputeResolver_wallet,
      contract_price,
    } = req.body;

    if (
      !jobId ||
      !buyerId ||
      !sellerId ||
      !contractAddress ||
      !seller_wallet ||
      !buyer_wallet ||
      !disputeResolver_wallet ||
      !contract_price
    )
      return res.status(500).send({ err: 'err' });

    try {
      // const contract_address = 'EQAq_yMMnSvml8HVgxWyRgilkg6okm_YkTEO1HPL74Oe5h8v';
      // const funds = 0;
      // const contract_status = 0;

      // const contractCreated = CreateContract({
      //   sellerAddress: seller_wallet,
      //   buyerAddress: buyer_wallet,
      //   resolverAddress: disputeResolver_wallet,
      //   contractPrice: contract_price,
      // });

      // // Convert unix epoc time to datetime
      // const deployed_time = new Date(1678568563 * 1000);
      // const deposit_time = '';
      // const delivery_time = '';
      // const max_time_to_deposit = '';
      // const max_time_to_complete = '';
      // const max_time_to_review = '';

      // const newContract = {
      //   msg: 'sssuck',
      // };
      // console.log('123', seller_wallet);
      const newContract = await new Contract({
        job: jobId,
        buyer: buyerId,
        seller: sellerId,
        contract_address: contractAddress,
        seller_wallet,
        buyer_wallet,
        disputeResolver_wallet,
        contract_price,
        // funds,
        contract_status: 0,
        // deployed_time,
        // deposit_time,
        // delivery_time,
        // max_time_to_deposit,
        // max_time_to_complete,
        // max_time_to_review,
      });

      newContract.save();

      // newContract.save().then(result =>
      //   console.log(result)
      //   );

      // console.log(newContract);
      res.status(200).send({ data: newContract });
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getContractStatus(req, res) {
    const { contractId } = req.params;
    if (!contractId) return res.status(500).send({ err: 'err' });

    try {
      const contract = await Contract.findById(contractId);
      res.status(200).send({ status: contract.contract_status });
    } catch (error) {
      res.status(500).send({ err: 'err' });
    }
  }

  async setContractStatus(req, res) {
    const { contractId } = req.params;

    const { status } = req.body;

    try {
      const contract = await Contract.findByIdAndUpdate(contractId, { contract_status: status });
      res.status(200).send({ msg: 'success', status });
    } catch (error) {
      res.status(500).send({ err: 'err' });
    }
  }

  async getContractDetailsById(req, res) {
    const { contractId } = req.params;
    if (!contractId) return res.status(500).send({ err: 'err' });

    try {
      const contract = await Contract.findById(contractId)
        .populate('job')
        .populate('buyer')
        .populate('seller');
      res.status(200).send({ data: contract });
    } catch (error) {
      res.status(500).send({ err: 'err' });
    }
  }

  async getContractDetailsByUser(req, res) {
    const { userId } = req.params;
    // if (!contractId) return res.status(500).send({ err: 'err' });

    try {
      const contract = await Contract.find({ $or: [{ buyer: userId }, { seller: userId }] })
        // const contract = await Contract.find({ seller: userId })

        .populate('job')
        .populate('buyer')
        .populate('seller');
      res.status(200).send({ data: contract });
    } catch (error) {
      res.status(500).send({ err: 'err' });
    }
  }

  // TODO: Whats that
  async getContractDetails(req, res) {
    const { contractId } = req.params;
    if (!contractId) return res.status(500).send({ err: 'err' });

    // Call testnet
    // ton.Contract();

    // console.log(contractId);
    res.status(200).send({ data: contractId });
  }
}

module.exports = new contractController();
