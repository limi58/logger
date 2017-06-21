const assert = require('assert')
const fs = require('fs')
const logger = require('../index.js')

describe('test logger', function () {
  it('no path param should throw error', function() {
    assert.throws(() => {
      const log = logger()
      log('hi')
    }, /require/)
  })

  it('no exists path should throw error', function(done) {
    const log = logger({ path: './hahahaha' })
    log('hi', err => {
      assert(err)
      done()
    })
  })

  it('should work', function(done) {
    const log = logger({ path: './logs' })
    log('hi', err => {console.log(err)
      assert(!err)
      done()
    })
  })

  it('no cb should work', function(done) {
    const log = logger({ path: './logs' })
    log('hi')
    done()
  })
})
