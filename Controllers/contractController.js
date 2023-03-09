const Contract = require('../Models/contralModel');

class contractController{
    async create(req, res) {
        const { seller_wallet, buyer_wallet, disputeResolver_wallet, contract_price } = req.body;
        if (!seller_wallet || !buyer_wallet || !disputeResolver_wallet || !contract_price) return res.status(500).send({ err: 'err' });
    
        try {
            // Generate contract 
            // Get contract details 

            // TEST
            seller_wallet = 'kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP';
            buyer_wallet = 'kQCxPXjtEBNbDeV1EbruV9FIRJsh6FUQ3Z-sE-GqDrzL6kcf';
            disputeResolver_wallet = 'EQAq_yMMnSvml8HVgxWyRgilkg6okm_YkTEO1HPL74Oe5h8v';
            contract_price = '250';

            const contract_address = 'EQAq_yMMnSvml8HVgxWyRgilkg6okm_YkTEO1HPL74Oe5h8v';
            const funds = '0';
            const contract_status = '0';
            const deployed_time = '';
            const deposit_time = '';
            const delivery_time = '';
            const max_time_to_deposit = '';
            const max_time_to_complete = '';
            const max_time_to_review = '';
            

          const newContract = await new Contract({ 
            contract_address, seller_wallet, buyer_wallet, disputeResolver_wallet, contract_price, 
            funds, contract_status, deployed_time, deposit_time, delivery_time, max_time_to_deposit,
            max_time_to_complete, max_time_to_review});
            newContract.save();
            
        } catch (error) {
          console.log(error);
        }
    

        res.status(200).send({ data: newContract });
    }

    // async apply(req, res) {
    //     const { contractId, userId } = req.body;
    //     if (!contractId || !userId) res.status(500).send({ error: 'Error' });
    
    //     const user = await User.findById(userId);
    //     const contract = await Contract.findById(contractId);
    
    //     if (!contract || !user) res.status(500).send({ error: 'No such user or job' });
    
    //     const newContract = new Contract({ 
    //         userId: user, jobId: job });
    //     newContract.save();
    
    //     res.status(200).send({ data: newContract });
    // }
}

module.exports = new contractController();