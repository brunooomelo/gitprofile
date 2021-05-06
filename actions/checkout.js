const fs = require('fs')
const yaml = require('js-yaml')
const os = require('os')
const path = require('path')
const { exec } = require('child_process')
const { promisify } = require('util')

const execall = promisify(exec)
const homedir = path.join(os.homedir(), '.gitprofile.yml')

const checkout = async (key) => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(homedir, 'utf8'))
    if (!doc[key]) {
      return console.log('profile not exist')
    }

    await execall(`git config --global user.name "${doc[key].username}"`)
    await execall(`git config --global user.email "${doc[key].email}"`)

    const { stdout } = await execall('git config --list')
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
  } catch (error) {
    throw error
  }
}

module.exports = checkout
