const path = require('path');
const os = require('os');

module.exports = {
  homedir: path.join(os.homedir(), '.gitprofiletest.yml'),
};
