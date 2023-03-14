const base64url = require('base64url');
const qs = require('qs');
// import { Address, beginCell, contractAddress, storeStateInit, toNano } from 'ton';
const { Address, beginCell, contractAddress, storeStateInit, toNano } = require('ton');

// import { JobContract } from './Contract/JobContract';
const { JobContract } = require('./Contract/JobContract');

// interface Props{
//     sellerAddress: string;
//     buyerAddress: string;
//     resolverAddress: string;
//     contractPrice: bigint;
// }

const createContract = async ({ sellerAddress, buyerAddress, resolverAddress, contractPrice }) => {
  try {
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
    let initStr = base64url(
      beginCell().store(storeStateInit(init)).endCell().toBoc({ idx: false }),
    );

    // Create a deploy link
    console.log(
      `ton://transfer/` +
        address.toString({ testOnly: testnet }) +
        '?' +
        qs.stringify({
          text: 'Deploy',
          amount: deployAmount.toString(10),
          init: initStr,
        }),
    );
  } catch (error) {
    console.log('WTF ', error);
  }
};

module.exports = createContract;
