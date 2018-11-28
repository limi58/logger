const fs = require('fs')
const path = require('path')

function logger(config = {}) {
  verifyConfig(config)
  const _path = config.path
  const filename = config.filename || 'log'
  return (msg, cb) => {
    const current = new Date()
    const currentDate = current.toLocaleDateString().replace(/\//g, '-')
    if (!cb) cb = () => {}
    fs.access(_path, err => {
      if (err) {
        cb(err)
        return
      }
      const file = path.join(_path, `${filename}${currentDate}.log`)
      fs.open(file, 'a', (err, fd) => {
        if (err) {
          cb(err)
          return
        }
        fs.write(fd, getLoggerMsg(msg, current), (err, written, string) => {
          if (err) {
            cb(err)
            return
          }
          fs.close(fd, e => e)
          cb()
        })
      })
    })
  }
}

function getLoggerMsg(msg, current) {
  return `[ ${current.toLocaleString()} ]\n${msg}\n\n`
}

function verifyConfig(config) {
  if (config.path == null) throw new Error('filename require')
}

module.exports = logger
