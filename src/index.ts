import mainnet from '@pooltogether/v4-mainnet/contracts.json';
import testnet from '@pooltogether/v4-testnet/contracts.json';
import tokenomicsTesnet from '@pooltogether/tokenomics-testnet/contracts.json';

import generatePrizePoolNetwork from './utils/generatePrizePoolNetwork';

const prizePoolNetworkTestnet = generatePrizePoolNetwork(testnet, tokenomicsTesnet);

export { mainnet };
export { testnet };
export { tokenomicsTesnet };
export { prizePoolNetworkTestnet };

export default {
  mainnet,
  testnet,
  tokenomicsTesnet,
  prizePoolNetworkTestnet
};
