#!/usr/bin/env node

const program = require('commander')

program
  .version('0.0.1')
  .description('Fake package manager')

program
  .command('add [name]', '')

program
  .command('remove [name]', '')

program.parse(process.argv)
