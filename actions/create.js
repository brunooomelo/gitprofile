const YMLFILE = require('../helper/file');
const profileBuild = require('../helper/profileBuild');
const createProfile = require('../questions/createProfile');

const create = () =>
  createProfile()
    .then(profileBuild)
    .then((profile) => YMLFILE.getYAML().then(YMLFILE.mergeYML(profile)))
    .then(YMLFILE.mergeYML)
    .then(YMLFILE.saveYAML)
    .catch(console.error);

module.exports = create;
