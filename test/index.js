/* eslint no-console: "off" */

'use strict'

const { should } = require('chai').use(require('chai-as-promised'))

const BaseJoi = require('joi')
const JoiIMONumberExtension = require('../src')

const Joi = BaseJoi.extend(JoiIMONumberExtension)

describe('Joi IMO Number Extension', () => {

  before(async () => {
    should()
  })

  it(`should pass validation if valid IMO number provided`, async () => {
    const schema = Joi.string().imoNumber()
    const result = await schema.validate('IMO 7035341').should.be.fulfilled
    result.should.be.equal('IMO 7035341')
  })

  it(`should fail validation if IMO number provided without the 'IMO' prefix`, async () => {
    const schema = Joi.string().imoNumber()
    const error = await schema.validate('7035341').should.be.rejected
    error.message.should.equal('"value" needs to have a valid IMO number prefix')
  })

  it(`should fail validation if invalid string is provided`, async () => {
    const schema = Joi.string().imoNumber()
    const error = await schema.validate('foobar').should.be.rejected
    error.message.should.equal('"value" needs to be a valid vessel IMO number')
  })

  it(`should fail validation if IMO number is not provided as a string`, async () => {
    const schema = Joi.string().imoNumber()
    const error = await schema.validate(7035341).should.be.rejected
    error.message.should.equal('"value" must be a string')
  })

})
