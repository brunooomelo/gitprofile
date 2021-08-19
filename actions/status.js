const boxen = require('boxen');
const { exec } = require('child_process');
const { promisify } = require('util');

const execall = promisify(exec);

const status = async () => {
  const { stdout } = await execall('git config --list');
  const data = stdout.split('\n').reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    if (!key) {
      return acc;
    }
    return {
      [key]: value,
      ...acc,
    };
  }, {});
  console.log(
    boxen(
      `current config\n\nname: ${data['user.name']}\nemail: ${data['user.email']}`,
      { padding: 1 }
    )
  );
};

module.exports = status;
