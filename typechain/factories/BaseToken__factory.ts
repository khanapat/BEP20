/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseToken, BaseTokenInterface } from "../BaseToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011ca380380620011ca833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208201519101519092509050838383836000620001c46001600160e01b03620002a316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350835162000223906006906020870190620002a8565b50825162000239906005906020860190620002a8565b506004805460ff191660ff84161790556003819055336000818152600160209081526040808320859055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350505050505050506200034a565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002eb57805160ff19168380011785556200031b565b828001600101855582156200031b579182015b828111156200031b578251825591602001919060010190620002fe565b50620003299291506200032d565b5090565b620002a591905b8082111562000329576000815560010162000334565b610e70806200035a6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063893d20e811610097578063a457c2d711610066578063a457c2d7146102dd578063a9059cbb14610309578063dd62ed3e14610335578063f2fde38b1461036357610100565b8063893d20e81461028c5780638da5cb5b146102b057806395d89b41146102b8578063a0712d68146102c057610100565b8063313ce567116100d3578063313ce56714610212578063395093511461023057806370a082311461025c578063715018a61461028257610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101c257806323b872dd146101dc575b600080fd5b61010d610389565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ae6004803603604081101561019857600080fd5b506001600160a01b03813516906020013561041f565b604080519115158252519081900360200190f35b6101ca61043c565b60408051918252519081900360200190f35b6101ae600480360360608110156101f257600080fd5b506001600160a01b03813581169160208101359091169060400135610442565b61021a6104cf565b6040805160ff9092168252519081900360200190f35b6101ae6004803603604081101561024657600080fd5b506001600160a01b0381351690602001356104d8565b6101ca6004803603602081101561027257600080fd5b50356001600160a01b031661052c565b61028a610547565b005b610294610608565b604080516001600160a01b039092168252519081900360200190f35b610294610617565b61010d610626565b6101ae600480360360208110156102d657600080fd5b5035610687565b6101ae600480360360408110156102f357600080fd5b506001600160a01b03813516906020013561070c565b6101ae6004803603604081101561031f57600080fd5b506001600160a01b03813516906020013561077a565b6101ca6004803603604081101561034b57600080fd5b506001600160a01b038135811691602001351661078e565b61028a6004803603602081101561037957600080fd5b50356001600160a01b03166107b9565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104155780601f106103ea57610100808354040283529160200191610415565b820191906000526020600020905b8154815290600101906020018083116103f857829003601f168201915b5050505050905090565b600061043361042c61082f565b8484610833565b50600192915050565b60035490565b600061044f84848461091f565b6104c58461045b61082f565b6104c085604051806060016040528060288152602001610d84602891396001600160a01b038a1660009081526002602052604081209061049961082f565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610a7d16565b610833565b5060019392505050565b60045460ff1690565b60006104336104e561082f565b846104c085600260006104f661082f565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610b1416565b6001600160a01b031660009081526001602052604090205490565b61054f61082f565b6000546001600160a01b039081169116146105b1576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000610612610617565b905090565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104155780601f106103ea57610100808354040283529160200191610415565b600061069161082f565b6000546001600160a01b039081169116146106f3576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6107046106fe61082f565b83610b75565b506001919050565b600061043361071961082f565b846104c085604051806060016040528060258152602001610df5602591396002600061074361082f565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a7d16565b600061043361078761082f565b848461091f565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6107c161082f565b6000546001600160a01b03908116911614610823576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61082c81610c67565b50565b3390565b6001600160a01b0383166108785760405162461bcd60e51b8152600401808060200182810382526024815260200180610d3a6024913960400191505060405180910390fd5b6001600160a01b0382166108bd5760405162461bcd60e51b8152600401808060200182810382526022815260200180610e1a6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166109645760405162461bcd60e51b8152600401808060200182810382526025815260200180610d156025913960400191505060405180910390fd5b6001600160a01b0382166109a95760405162461bcd60e51b8152600401808060200182810382526023815260200180610dd26023913960400191505060405180910390fd5b6109ec81604051806060016040528060268152602001610dac602691396001600160a01b038616600090815260016020526040902054919063ffffffff610a7d16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610a21908263ffffffff610b1416565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b0c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ad1578181015183820152602001610ab9565b50505050905090810190601f168015610afe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610b6e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038216610bd0576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600354610be3908263ffffffff610b1416565b6003556001600160a01b038216600090815260016020526040902054610c0f908263ffffffff610b1416565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038116610cac5760405162461bcd60e51b8152600401808060200182810382526026815260200180610d5e6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039290921691909117905556fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737342455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a20617070726f766520746f20746865207a65726f2061646472657373a265627a7a72315820e31a3cb10b94ad7ac954b2a57de07dedb5931bda6a7b4235888a97d57611b65564736f6c63430005100032";

export class BaseToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseToken> {
    return super.deploy(
      name,
      symbol,
      decimals,
      totalSupply,
      overrides || {}
    ) as Promise<BaseToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      decimals,
      totalSupply,
      overrides || {}
    );
  }
  attach(address: string): BaseToken {
    return super.attach(address) as BaseToken;
  }
  connect(signer: Signer): BaseToken__factory {
    return super.connect(signer) as BaseToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseTokenInterface {
    return new utils.Interface(_abi) as BaseTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseToken {
    return new Contract(address, _abi, signerOrProvider) as BaseToken;
  }
}