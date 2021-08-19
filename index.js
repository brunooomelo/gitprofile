#!/usr/bin/env node

const program = require('commander');
const { list, create, checkout, status, remove } = require('./actions');

const bootstrap = require('./helper/bootstrap');
const { homedir } = require('./helper/constants');
const { version } = require('./package.json');

program.version(version).description('Fake package manager');

program.command('create', '').action(create);

program.command('list', '').action(list);

program.command('checkout', '').action(checkout);

program.command('remove [name]', '').action(remove);

program.command('status', '').action(status);

bootstrap(homedir).then(() => program.parse(process.argv));
