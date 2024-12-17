import { defineChain } from '../../utils/chain/defineChain.js'

const sourceId = 1 // mainnet

export const corn = /*#__PURE__*/ defineChain({
  id: 5464,
  name: 'Saga',
  nativeCurrency: {
    decimals: 18,
    name: 'Gas',
    symbol: 'GAS',
  },
  rpcUrls: {
    default: { http: ['http://sagaevm-5464-1.jsonrpc.sagarpc.io'] },
  },
  blockExplorers: {
    default: {
      name: 'Saga Explorer',
      url: 'https://sagaevm-5464-1.sagaexplorer.io/',
    },
  },
  contracts: {
  },
  sourceId,
})
