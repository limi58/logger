const fs = require('fs')
const path = require('path')
const dateFormat = require('./lib/format_date.js')

function logger(config) {
  return msg => {
    const filename = config.filename + dateFormat('', 'date') + '.log'
    fs.open(filename, 'a', (err, fd) => {
      fs.write(fd, getLoggerMsg(msg))
    })
  }
}

function getLoggerMsg(msg) {
  return `[ ${dateFormat()} ]\n${msg}\n\n`
}

module.exports = logger
