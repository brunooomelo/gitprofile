const fs = require('fs')
const yaml = require('js-yaml')
const os = require('os')
const path = require('path')

const homedir = path.join(os.homedir(), '.gitprofile.yml')
const buildResponse = data => {
  const result = Object.keys(data).map(key => ({
    key,
    ...data[key]
  }))
  return result
}

const list = () => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(homedir, 'utf8'))
    buildResponse(doc).map((item, index, arr) => {
      console.log(`${item.key}`)
      console.log(` username: ${item.username}`)
      console.log(` email: ${item.email}`)
      if (arr.length !== index + 1) {
        console.log('\n')
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = list
