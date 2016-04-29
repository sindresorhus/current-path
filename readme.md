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

Returns a promise for the current directory Finder or Explorer.


## CLI

```
$ npm install --global current-path
```

```
$ current-path --help

  Example
    $ current-path
    /Users/sindresorhus/dev/current-path
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
