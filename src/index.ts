import mainnet from '@pooltogether/v4-mainnet/contracts.json';
import testnet from '@pooltogether/v4-testnet/contracts.json';
import tokenomicsTestnet from '@pooltogether/tokenomics-testnet/contracts.json';

import generatePrizePoolNetwork from './utils/generatePrizePoolNetwork';

const prizePoolNetworkTestnet = generatePrizePoolNetwork(testnet, tokenomicsTestnet);

export { mainnet };
export { testnet };
export { tokenomicsTestnet };
export { prizePoolNetworkTestnet };

export default {
  mainnet,
  testnet,
  tokenomicsTestnet,
  prizePoolNetworkTestnet
};
