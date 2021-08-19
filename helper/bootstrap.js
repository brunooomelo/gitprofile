const fs = require('fs');
const { promisify } = require('util');

const fsStat = promisify(fs.stat);
const fsWriteFile = promisify(fs.writeFile);

const bootstrap = (homedir) => {
  return fsStat(homedir).catch((err) => {
    if (err && err.code === 'ENOENT') {
      return fsWriteFile(homedir, '').catch((error) => {
        throw new Error(error);
      });
    }
  });
};

module.exports = bootstrap;
