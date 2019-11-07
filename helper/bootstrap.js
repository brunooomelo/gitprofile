const fs = require('fs')
const os = require('os')
const path = require('path')

const bootstrap = () => {
  const homedir = path.join(os.homedir(), '.gitprofile.yml')
  fs.stat(homedir, function (err) {
    if (err && err.code === 'ENOENT') {
      fs.writeFileSync(homedir, '')
    }
  })
}

module.exports = bootstrap
