const inquirer = require('inquirer');

const createProfile = () =>
  inquirer.prompt([
    {
      name: 'key',
      type: 'input',
      message: "What's your key name?",
    },
    {
      name: 'name',
      type: 'input',
      message: "What's your name?",
    },
    {
      name: 'email',
      type: 'input',
      message: "What's your best e-mail?",
    },
    {
      type: 'confirm',
      name: 'confirmation',
      message: 'are you sure?',
    },
  ]);

module.exports = createProfile;
