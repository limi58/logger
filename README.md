# logger
very simple file logger for nodejs

# install
`npm install --save m-logger`

# Usage
```js
const logger = require('m-logger')
const log = logger({
  path: './logs', // define dir where log should be saved  
  filename: 'log', // define filename exclude extension, default 'log'
})
log('here have a error', function(err) {...})
```

path `./logs` will have a file like `log2016-9-9.log`.

content will be like this:

```js
[ 2016-9-14 23:19:12 ]
here have a error
```
