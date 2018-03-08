# Joi IMO Number Extension

A Joi extension for validationg vessel [IMO numbers](https://en.wikipedia.org/wiki/IMO_number).

### Installation

```
npm install --save joi-imo-number-extension
```

### Usage

```js
const BaseJoi = require('joi')
const JoiIMONumberExtension = require('joi-imo-number-extension')
const Joi = BaseJoi.extend(JoiIMONumberExtension)

const schema = Joi.string().imoNumber()
const result = await schema.validate('IMO 7035341')

console.log(result) // IMO 7035341
```
