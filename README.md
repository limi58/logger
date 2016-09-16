# logger
very simple file logger for nodejs

# Usage
```js
const logger = require('./logger')
const log = logger({
  filename: path.join(__dirname, 'logs', 'log') // define where log should be saved  
})
log('here have a error')
```

path `./logs` will have a file name such as `log2016-09-09.log`.

content will be like this:

```js
[ 2016-09-14 23:19:12 ]
TypeError: Cannot read property 'foo' of undefined
    at parse (D:\web\imbgf\lib\format_date.js:16:20)
    at dateFormater (D:\web\imbgf\lib\format_date.js:12:10)

[ 2016-09-14 23:21:45 ]
TypeError: Cannot read property 'bar' of undefined
    at parse (D:\web\imbgf\lib\format_date.js:16:20)
```
