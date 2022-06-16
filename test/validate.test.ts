import AJV from 'ajv';
import { schema } from '@pooltogether/contract-list-schema';

import { mainnet, testnet, tokenomicsTesnet, prizePoolNetworkTestnet } from '../src/index';

describe('validate data against schema', () => {
  let ajv: AJV;

  beforeEach(() => {
    ajv = new AJV();
  });

  it('validate testnet data', () => {
    expect(ajv.validate(schema, testnet)).toBeTruthy();
  });

  it('validate tokenomicsTesnet data', () => {
    expect(ajv.validate(schema, tokenomicsTesnet)).toBeTruthy();
  });

  it('validate prizePoolNetworkTestnet data', () => {
    expect(ajv.validate(schema, prizePoolNetworkTestnet)).toBeTruthy();
  });

  it('validate mainnet data', () => {
    expect(ajv.validate(schema, mainnet)).toBeTruthy();
  });
});
