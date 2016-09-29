const fs = require('fs')
const path = require('path')
const dateFormat = require('simple-date-formater')

function logger(config = {}) {
  verifyConfig(config)
  const _path = config.path
  const filename = config.filename || 'log'
  const date = dateFormat('', 'date')
  return (msg, cb) => {
    if (!cb) cb = () => {}
    fs.access(_path, err => {
      if (err) {
        cb(err)
        return
      }
      const file = path.join(_path, `${filename}${dateFormat('', 'date')}.log`)
      fs.open(file, 'a', (err, fd) => {
        if (err) {
          cb(err)
          return
        }
        fs.write(fd, getLoggerMsg(msg), (err, written, string) => {
          if (err) {
            cb(err)
            return
          }
          fs.close(fd)
          cb()
        })
      })
    })
  }
}

function getLoggerMsg(msg) {
  return `[ ${dateFormat()} ]\n${msg}\n\n`
}

function verifyConfig(config) {
  if (config.path == null) throw new Error('filename require')
}

module.exports = logger
