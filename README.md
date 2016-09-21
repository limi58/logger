# logger
very simple file logger for nodejs

# install
`npm install --save simple-file-logger`

# Usage
```js
const logger = require('simple-file-logger')
const log = logger({
  path: './logs', // define dir where log should be saved  
  filename: 'log', // define filename exclude extension, default 'log'
})
log('here have a error', function(err) {...})
```

path `./logs` will have a file like `log2016-09-09.log`.

content will be like this:

```js
[ 2016-09-14 23:19:12 ]
here have a error
```
