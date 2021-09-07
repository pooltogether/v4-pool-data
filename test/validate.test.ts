import data from '../src/test.json'
import schema from '../src/test.schema.json'
import AJV from 'ajv'

describe('validate data against schema', () => {
  it('data is valid', () => {
    const ajv = new AJV()
    expect(ajv.validate(schema, data)).toBeTruthy()
  })
})
