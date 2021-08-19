const fs = require('fs');
const yaml = require('js-yaml');
const os = require('os');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const boxen = require('boxen');
const fileYAML = require('../helper/file');
const inquirer = require('inquirer');
const chooseProfile = require('../questions/chooseProfile');
const execall = promisify(exec);
const homedir = path.join(os.homedir(), '.gitprofile.yml');

const checkout = async () => {
  try {
    const choose = await fileYAML.getYAML();
    console.log('choose', choose);
    return chooseProfile(choose, 'are you sure?');
  } catch (error) {
    throw error;
  }
};

// await execall(`git config --global user.name "${doc[key].username}"`);
// await execall(`git config --global user.email "${doc[key].email}"`);

// const { stdout } = await execall('git config --list');
// const data = stdout.split('\n').reduce((acc, curr) => {
//   const [key, value] = curr.split('=');
//   if (!key) {
//     return acc;
//   }
//   return {
//     [key]: value,
//     ...acc,
//   };
// }, {});

// console.log(
//   boxen(
//     `current config\nname: ${data['user.name']}\nemail: ${data['user.email']}`,
//     {
//       padding: 1,
//     }
//   )
// );

module.exports = checkout;
