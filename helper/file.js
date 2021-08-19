const fs = require('fs');
const { promisify } = require('util');
const yaml = require('js-yaml');
const { homedir } = require('./constants');

const fsReadFile = promisify(fs.readFile);
const fsWriteFile = promisify(fs.writeFile);

const getYAML = async () => fsReadFile(homedir, 'utf8').then(yaml.load);

const saveYAML = async (doc) => {
  try {
    await fsWriteFile(homedir, yaml.dump(doc), 'utf8');
    console.log('save with sucess');
    return doc;
  } catch (error) {
    console.log(error);
  }
};

const mergeYML =
  (update = {}) =>
  (current) => {
    console.log(update);
    console.log('current', current);
    const merge = {
      ...current,
      ...update,
    };
    return merge;
  };

module.exports = {
  getYAML,
  saveYAML,
  mergeYML,
};
