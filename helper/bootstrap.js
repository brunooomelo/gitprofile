const fs = require('fs')
const os = require('os')
const path = require('path')

const bootstrap = () => {
  const homedir = path.join(os.homedir(), '.gitprofile.yml')
  return new Promise((resolve, reject) => {
    fs.stat(homedir, err => {
      if (err && err.code === 'ENOENT') {
        return fs.writeFile(homedir, '', () => {
          return resolve()
        })
      }
      return resolve()
    })
  })
}

module.exports = bootstrap
