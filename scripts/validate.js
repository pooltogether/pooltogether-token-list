#!/usr/bin/env node

const chalk = require('chalk')
const { schema } = require('@uniswap/token-lists')
const Ajv = require("ajv")

const PoolTogetherTokenList = require('../pooltogether.tokenlist.json')

const ajv = new Ajv({ allErrors: true, format: 'full' })
const validate = ajv.compile(schema)
const valid = validate(PoolTogetherTokenList)

if (!valid) {
  console.error(chalk.red('Validation failed: '))
  console.error(validate.errors)
} else {
  console.log(chalk.green('Valid!'))
}
