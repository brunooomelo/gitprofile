const buildError = (key) => `Error in build profile: ${key} not found`;

const keyError = new Error(buildError("key"));
const nameError = new Error(buildError("name"));
const emailError = new Error(buildError("email"));

const buildData = ({ key, name, email }) => {
  if (!key) {
    throw keyError;
  }
  if (!name) {
    throw nameError;
  }
  if (!email) {
    throw emailError;
  }

  return {
    [key]: {
      username: name,
      email: email,
    },
  };
};

module.exports = buildData;
