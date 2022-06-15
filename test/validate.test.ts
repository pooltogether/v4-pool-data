import AJV from 'ajv';
import { schema } from '@pooltogether/contract-list-schema';

import { mainnet, testnet } from '../src/index';

describe('validate data against schema', () => {
  let ajv: AJV;

  beforeEach(() => {
    ajv = new AJV();
  });

  it('validate testnet data', () => {
    expect(ajv.validate(schema, testnet)).toBeTruthy();
  });

  it('validate mainnet data', () => {
    expect(ajv.validate(schema, mainnet)).toBeTruthy();
  });
});
