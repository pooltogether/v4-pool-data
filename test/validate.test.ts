import testData from '../src/test.json'
import testSchema from '../src/test.schema.json'
import { schema } from '@pooltogether/contract-list-schema'
import testnetData from '../src/testnet.json'
import AJV from 'ajv'

describe('validate test data against schema', () => {
  it('data is valid', () => {
    const ajv = new AJV()
    expect(ajv.validate(testSchema, testData)).toBeTruthy()
  })
})

describe('validate testnet against schema', () => {
  it('data is valid', () => {
    const ajv = new AJV()
    const isValid = ajv.validate(schema, testnetData)
    if (ajv.errors) {
      console.warn(ajv.errors)
    }
    expect(isValid).toBeTruthy()
  })
})
