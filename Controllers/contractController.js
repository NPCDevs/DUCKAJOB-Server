//const ton = require('../Ton/tonConnect');
const Contract = require('../Models/contractModel');
const CreateContract = require('../Ton/tonCreateContract.js');

class contractController {
  async create(req, res) {
    const { seller_wallet, buyer_wallet, disputeResolver_wallet, contract_price } = req.body;

    if (!seller_wallet || !buyer_wallet || !disputeResolver_wallet || !contract_price)
      return res.status(500).send({ err: 'err' });

    try {
      const contract_address = 'EQAq_yMMnSvml8HVgxWyRgilkg6okm_YkTEO1HPL74Oe5h8v';
      const funds = 0;
      const contract_status = 0;

      const contractCreated = CreateContract({
        sellerAddress: seller_wallet,
        buyerAddress: buyer_wallet,
        resolverAddress: disputeResolver_wallet,
        contractPrice: contract_price,
      });

      // Convert unix epoc time to datetime
      const deployed_time = new Date(1678568563 * 1000);
      const deposit_time = '';
      const delivery_time = '';
      const max_time_to_deposit = '';
      const max_time_to_complete = '';
      const max_time_to_review = '';

      const newContract = {
        msg: 'sssuck',
      };
      // var newContract = new Contract({
      //   contract_address,
      //   seller_wallet,
      //   buyer_wallet,
      //   disputeResolver_wallet,
      //   contract_price,
      //   funds,
      //   contract_status,
      //   deployed_time,
      //   deposit_time,
      //   delivery_time,
      //   max_time_to_deposit,
      //   max_time_to_complete,
      //   max_time_to_review,
      // });

      // newContract.save().then(result =>
      //   console.log(result)
      //   );

      console.log(newContract);
      res.status(200).send({ data: newContract });
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getContractDetails(req, res) {
    const { contractId } = req.params;
    if (!contractId) return res.status(500).send({ err: 'err' });

    // Call testnet
    ton.Contract();

    console.log(contractId);
    res.status(200).send({ data: contractId });
  }
}

module.exports = new contractController();
