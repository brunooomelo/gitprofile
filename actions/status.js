const { exec } = require('child_process')
const { promisify } = require('util')

const execall = promisify(exec)

const status = async () => {
  const { stdout } =  await execall('git config --list')
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
}

module.exports = status
