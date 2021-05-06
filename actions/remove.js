const fs = require('fs')
const yaml = require('js-yaml')
const os = require('os')
const path = require('path')

const homedir = path.join(os.homedir(), '.gitprofile.yml')

const remove = (data) => {
  try {
    const dataload = yaml.safeLoad(fs.readFileSync(homedir, 'utf8'))
    const merge = new Map()
    if (!dataload) {
      return console.log(`${data} isn't exist in your config`)
    }
    Object.keys(dataload).map((key) => merge.set(key, dataload[key]))
    merge.delete(data)
    const obj = {};
    merge.forEach((value, key) => (obj[key] = value));
    const doc = yaml.safeDump(obj)
    const isEmpty = !merge.size ? '' : doc
    fs.writeFile(homedir, isEmpty, 'utf8', (err) => {
      if (err) throw err
      console.log(`${data} is removed success`)
    })
  } catch (error) {
    console.log('[remove]', error)
  }
}

module.exports = remove
