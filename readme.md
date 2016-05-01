# current-path [![Build Status](https://travis-ci.org/sindresorhus/current-path.svg?branch=master)](https://travis-ci.org/sindresorhus/current-path)

> Get the path of the current directory in Finder *(OS X)* and Explorer *(Windows)*


## Usage

```
$ npm install --save current-path
```

```js
const currentPath = require('current-path');

currentPath().then(path => {
	console.log(path);
	//=> '/Users/sindresorhus/dev/current-path'
});
```


## API

### currentPath()

Returns a promise for the current directory in Finder or Explorer.


## Related

- [current-path-cli](https://github.com/sindresorhus/current-path-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
