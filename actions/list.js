const boxen = require('boxen');
const fileYAML = require('../helper/file');

const buildResponse = (data) => {
  const result = Object.keys(data).map((key) => ({
    key,
    ...data[key],
  }));
  return result;
};

const list = async () => {
  try {
    const doc = await fileYAML.getYAML();
    console.log(
      boxen(
        buildResponse(doc)
          .map(
            (item) =>
              `${item.key}\nusername: ${item.username}\nemail: ${item.email}\n`
          )
          .join('\n________________________\n'),
        {
          padding: 1,
        }
      )
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = list;
