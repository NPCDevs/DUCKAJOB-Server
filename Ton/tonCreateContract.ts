import base64url from 'base64url';
import qs from 'qs';
import { Address, beginCell,contractAddress, storeStateInit, toNano } from 'ton';
import { JobContract } from './Contract/JobContract';

interface Props{
    sellerAddress: string;
    buyerAddress: string;
    resolverAddress: string;
    contractPrice: bigint;
}

const createContract = (async ({sellerAddress, buyerAddress, resolverAddress, contractPrice}: Props) => {
// Forming an init package
    let seller = Address.parse(sellerAddress);
    let buyer = Address.parse(buyerAddress);
    let dispute_resolver = Address.parse(resolverAddress);

    let init = await JobContract.init(seller, buyer, dispute_resolver, contractPrice);
    let testnet = true;
    
    // Contract address
    let address = contractAddress(0, init);
    
    // Amount of TONs to attach to a deploy message
    let deployAmount = toNano('0.05');
    
    // Create string representation of an init package
    let initStr = base64url(beginCell()
            .store(storeStateInit(init))
            .endCell()
            .toBoc({ idx: false }));
    
    // Create a deploy link
    console.log(`ton://transfer/` + address.toString({ testOnly: testnet }) + "?" + qs.stringify({
        text: 'Deploy',
        amount: deployAmount.toString(10), 
        init: initStr
    }));

});

module.exports = createContract;