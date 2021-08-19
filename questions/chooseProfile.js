const inquirer = require("inquirer");

const chooseProfile = (choices = [], messageConfirm = "") =>
  inquirer
    .prompt([
      {
        type: "list",
        name: "profile",
        choices,
      },

      {
        type: "confirm",
        name: "confirm",
        message: messageConfirm,
      },
    ])
    .then((result) => {
      if (!result.confirm) {
        return process.exit(0);
      }
      return result.profile;
    });

module.exports = chooseProfile;
