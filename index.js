#!/usr/bin/env node

const program = require('commander')
const { list, add, checkout } = require('./actions')

const { version } = require('./package.json')

program
  .version(version)
  .description('Fake package manager')

program
  .command('add', '')
  .action(add)

program
  .command('list', '')
  .action(list)

program
  .command('checkout <key>', '')
  .action(checkout)

program
  .command('remove [name]', '')

program.parse(process.argv)