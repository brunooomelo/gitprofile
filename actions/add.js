const fs = require('fs')
const yaml = require('js-yaml')
const os = require('os')
const path = require('path')

const homedir = path.join(os.homedir(), '.gitprofile.yml')
const inquirer = require('inquirer')

const buildData = (prompt) => ({
  [prompt.key]: {
    username: prompt.name,
    email: prompt.email
  }
})
const list = () => inquirer.prompt([
  {
    name: 'key',
    type: 'input',
    message: 'key'
  },
  {
    name: 'name',
    type: 'input',
    message: 'name'
  },
  {
    name: 'email',
    type: 'input',
    message: 'email'
  }
])
  .then(buildData)
  .then(save)
  .catch(console.error)

const save = (data) => {
  try {
    const dataload = yaml.safeLoad(fs.readFileSync(homedir, 'utf8'))
    const merge = {
      ...dataload,
      ...data
    }
    const doc = yaml.safeDump(merge)
    fs.writeFile(homedir, doc, 'utf8', (err) => {
      if (err) throw err
      console.log('save with sucess')
    })
  } catch (error) {
    console.log('add', error)
  }
}

module.exports = list
