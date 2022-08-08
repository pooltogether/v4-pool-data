import { Contract, ContractList } from '@pooltogether/contract-list-schema';

export default function generatePrizePoolNetwork(
  testnet: ContractList,
  tokenomicsTestnet: ContractList
) {
  const contractList = {
    name: 'Testnet Prize Pool Network',
    version: { major: 1, minor: 0, patch: 0 },
    tags: {},
    contracts: [] as Contract[]
  };

  const contracts = [...testnet.contracts, ...tokenomicsTestnet.contracts];

  const uniqueContracts = contracts.reduce((uniqueContracts: Contract[], currentContract) => {
    if (
      !uniqueContracts.some(
        (contract) =>
          contract.address === currentContract.address &&
          contract.chainId === currentContract.chainId
      )
    ) {
      uniqueContracts.push(currentContract);
    }
    return uniqueContracts;
  }, []);

  contractList.contracts = uniqueContracts;

  return contractList;
}
