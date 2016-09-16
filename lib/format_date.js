const leftPad = require('left-pad')

function dateFormater(dateStr, type = 'date-time'){
  if (!dateStr) {
    return parse(new Date(), type)
  }
  if (!isNaN(Number(dateStr))) {
    dateStr = Number(dateStr)
    if (dateStr.toString().length !== 13) dateStr *= 1000
  }
  const date = new Date(dateStr)
  return parse(date, type)
}

function parse(date, type) {
  const year = date.getFullYear()
  const month = leftPad(date.getMonth() + 1, 2, 0)
  const day = leftPad(date.getDate(), 2, 0)
  const hour = leftPad(date.getHours(), 2, 0)
  const minute = leftPad(date.getMinutes(), 2, 0)
  const second = leftPad(date.getSeconds(), 2, 0)
  switch (type) {
    case 'date':
      return `${year}-${month}-${day}`
      break
    case 'time':
      return `${hour}:${minute}:${second}`
    default:
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
}

module.exports = dateFormater
