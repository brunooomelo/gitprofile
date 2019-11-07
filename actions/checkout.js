const fs = require('fs')
const yaml = require('js-yaml')
const os = require('os')
const path = require('path')
const { exec } = require('child_process')

const homedir = path.join(os.homedir(), '.gitprofile.yml')

const checkout = (key) => {
  const doc = yaml.safeLoad(fs.readFileSync(homedir, 'utf8'))
  if (!doc[key]) {
    return console.log('profile not exist')
  }
  exec('git config --global user.name ' + `"${doc[key].username}"`)
  exec('git config --global user.email ' + doc[key].email)

  exec('git config --list', (error, stdout) => {
    if (error) {
      throw error
    }
    const data = stdout.split('\n').reduce((acc, curr) => {
      const [key, value] = curr.split('=')
      if (!key) {
        return acc
      }
      return {
        [key]: value,
        ...acc
      }
    }, {})
    console.log(`
        current config
        name: ${data['user.name']}
        email: ${data['user.email']}
      `)
  })
}

module.exports = checkout
