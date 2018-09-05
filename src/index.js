'use strict'

const imonumber = require('imonumber')

module.exports = joi => {
  return {
    base: joi.string(),
    name: 'string',
    language: {
      ImoMissingPrefix: 'needs to have a valid IMO number prefix',
      ImoInvalidFormat: 'needs to be a valid vessel IMO number',
    },
    pre(value, state, options) {
      return value
    },
    rules: [
      {
        name: 'imoNumber',
        setup(params) {
          this._flags.imoNumber = true
        },
        validate(params, value, state, options) {
          if (imonumber.validate(value)) {
            return value
          }
          if (imonumber.validate(`IMO ${value}`)) {
            return this.createError('string.ImoMissingPrefix', { value }, state, options)
          }
          return this.createError('string.ImoInvalidFormat', { value }, state, options)
        },
      },
    ],
  }
}
