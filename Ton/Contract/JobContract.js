const {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  TupleBuilder,
  DictionaryValue,
} = require('ton-core');

// export type StateInit = {
//     $$type: 'StateInit';
//     code;
//     data;
// }

function storeStateInit(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

function loadStateInit(slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: 'StateInit', code: _code, data: _data };
}

function loadTupleStateInit(source) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit', code: _code, data: _data };
}

function storeTupleStateInit(source) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

// export type Context = {
//     $$type: 'Context';
//     bounced: boolean;
//     sender;
//     value: bigint;
//     raw;
// }

function storeContext(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

function loadContext(slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return { $$type: 'Context', bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return { $$type: 'Context', bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

// export type SendParameters = {
//     $$type: 'SendParameters';
//     bounce: boolean;
//     to;
//     value: bigint;
//     mode: bigint;
//     body | null;
//     code | null;
//     data | null;
// }

function storeSendParameters(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

function loadSendParameters(slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: 'SendParameters',
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: 'SendParameters',
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

// export type Deploy = {
//     $$type: 'Deploy';
//     queryId: bigint;
// }

function storeDeploy(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

function loadDeploy(slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy', queryId: _queryId };
}

function loadTupleDeploy(source) {
  let _queryId = source.readBigNumber();
  return { $$type: 'Deploy', queryId: _queryId };
}

function storeTupleDeploy(source) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

// export type DeployOk = {
//     $$type: 'DeployOk';
//     queryId: bigint;
// }

function storeDeployOk(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

function loadDeployOk(slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk', queryId: _queryId };
}

function loadTupleDeployOk(source) {
  let _queryId = source.readBigNumber();
  return { $$type: 'DeployOk', queryId: _queryId };
}

function storeTupleDeployOk(source) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

// export type Fund_Project = {
//     $$type: 'Fund_Project';
//     amount: bigint;
// }

function storeFund_Project(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeUint(1143817326, 32);
    b_0.storeUint(src.amount, 32);
  };
}

function loadFund_Project(slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1143817326) {
    throw Error('Invalid prefix');
  }
  let _amount = sc_0.loadUintBig(32);
  return { $$type: 'Fund_Project', amount: _amount };
}

function loadTupleFund_Project(source) {
  let _amount = source.readBigNumber();
  return { $$type: 'Fund_Project', amount: _amount };
}

function storeTupleFund_Project(source) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserFund_Project() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFund_Project(src)).endCell());
    },
    parse: (src) => {
      return loadFund_Project(src.loadRef().beginParse());
    },
  };
}

// export type Update_Status = {
//     $$type: 'Update_Status';
//     statusID: bigint;
// }

function storeUpdate_Status(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeUint(838918299, 32);
    b_0.storeUint(src.statusID, 32);
  };
}

function loadUpdate_Status(slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 838918299) {
    throw Error('Invalid prefix');
  }
  let _statusID = sc_0.loadUintBig(32);
  return { $$type: 'Update_Status', statusID: _statusID };
}

function loadTupleUpdate_Status(source) {
  let _statusID = source.readBigNumber();
  return { $$type: 'Update_Status', statusID: _statusID };
}

function storeTupleUpdate_Status(source) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.statusID);
  return builder.build();
}

function dictValueParserUpdate_Status() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeUpdate_Status(src)).endCell());
    },
    parse: (src) => {
      return loadUpdate_Status(src.loadRef().beginParse());
    },
  };
}

// export type Dispute_Resolve = {
//     $$type: 'Dispute_Resolve';
//     address;
// }

function storeDispute_Resolve(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeUint(2089403455, 32);
    b_0.storeAddress(src.address);
  };
}

function loadDispute_Resolve(slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2089403455) {
    throw Error('Invalid prefix');
  }
  let _address = sc_0.loadAddress();
  return { $$type: 'Dispute_Resolve', address: _address };
}

function loadTupleDispute_Resolve(source) {
  let _address = source.readAddress();
  return { $$type: 'Dispute_Resolve', address: _address };
}

function storeTupleDispute_Resolve(source) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  return builder.build();
}

function dictValueParserDispute_Resolve() {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDispute_Resolve(src)).endCell());
    },
    parse: (src) => {
      return loadDispute_Resolve(src.loadRef().beginParse());
    },
  };
}

//  type JobContract_init_args = {
//     $$type: 'JobContract_init_args';
//     seller;
//     buyer;
//     dispute_resolver;
//     contract_price: bigint;
// }

function initJobContract_init_args(src) {
  return (builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.seller);
    b_0.storeAddress(src.buyer);
    b_0.storeAddress(src.dispute_resolver);
    let b_1 = new Builder();
    b_1.storeInt(src.contract_price, 257);
    b_0.storeRef(b_1.endCell());
  };
}

async function JobContract_init(seller, buyer, dispute_resolver, contract_price) {
  const __code = Cell.fromBase64(
    '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',
  );
  const __system = Cell.fromBase64(
    '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',
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initJobContract_init_args({
    $$type: 'JobContract_init_args',
    seller,
    buyer,
    dispute_resolver,
    contract_price,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const JobContract_errors = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  3028: { message: `Max time to complete not exceeded` },
  3234: { message: `Only Seller can deliver` },
  3546: { message: `Only Seller can call - buyer not reviewed ` },
  3956: { message: `Incorrect State, can only be accepted when status dispute` },
  4429: { message: `Invalid sender` },
  7872: { message: `Max time to deposit exceeded` },
  18044: { message: `Incorrect State, can only be Not delivered when status funded` },
  18675: { message: `Max time to review not exceeded` },
  22025: { message: `Only Buyer can accept` },
  22641: { message: `Max time to deliver exceeded` },
  27002: { message: `Invalid status` },
  27088: { message: `Incorrect State, needs to be status delivered` },
  32991: { message: `Incorrect State, can only be funded when status unfunded` },
  37959: { message: `Max time to dispute exceeded` },
  38848: { message: `Incorrect State, can only be accepted when status delivered` },
  39030: { message: `Only dispute resolver can resolve dispute` },
  49548: { message: `Only Buyer can call - seller not delivered ` },
  49940: { message: `Incorrect State, can only be delivered when status funded` },
  52504: { message: `Only Buyer can dispute` },
  57500: { message: `Max time to accept exceeded` },
  57710: { message: `Incorrect amount to fund contract` },
};
class JobContract {
  static async init(seller, buyer, dispute_resolver, contract_price) {
    return await JobContract_init(seller, buyer, dispute_resolver, contract_price);
  }

  static async fromInit(seller, buyer, dispute_resolver, contract_price) {
    const init = await JobContract_init(seller, buyer, dispute_resolver, contract_price);
    const address = contractAddress(0, init);
    return new JobContract(address, init);
  }

  static fromAddress(address) {
    return new JobContract(address);
  }

  address;
  init;
  abi = {
    errors: JobContract_errors,
  };

  constructor(address, init) {
    this.address = address;
    this.init = init;
  }

  async send(provider, via, args, message) {
    let body = null;
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Fund_Project'
    ) {
      body = beginCell().store(storeFund_Project(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Update_Status'
    ) {
      body = beginCell().store(storeUpdate_Status(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Dispute_Resolve'
    ) {
      body = beginCell().store(storeDispute_Resolve(message)).endCell();
    }
    if (message === 'sellerDelivered') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === 'buyerAccept') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === 'buyerDispute') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === 'sellerNotDelivered') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === 'buyerNotReviewed') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Deploy'
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getFunds(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('Funds', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getDeployedTime(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('DeployedTime', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getDepositTime(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('DepositTime', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getContractStatus(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('ContractStatus', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getMaxTimeToDeposit(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('MaxTimeToDeposit', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getMaxTimeToComplete(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('MaxTimeToComplete', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getMaxTimeToReview(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('MaxTimeToReview', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getDeliveryTime(provider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('DeliveryTime', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }
}

module.exports = {
  JobContract,
  storeStateInit,
  loadStateInit,
  storeContext,
  loadContext,
  storeSendParameters,
  loadSendParameters,
  storeDeploy,
  loadDeploy,
  storeDeployOk,
  loadDeployOk,
  storeFund_Project,
  loadFund_Project,
  storeUpdate_Status,
  loadUpdate_Status,
  storeDispute_Resolve,
  loadDispute_Resolve,
};
