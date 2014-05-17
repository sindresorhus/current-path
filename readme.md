# current-path [![Build Status](https://travis-ci.org/sindresorhus/current-path.svg?branch=master)](https://travis-ci.org/sindresorhus/current-path)

> Get the path of the current directory in Finder *(OS X)* and Explorer *(Windows)*


## Install

```sh
$ npm install --save current-path
```


## Usage

```js
var currentPath = require('current-path');

currentPath(function (err, path) {
	if (err) {
		throw err;
	}

	console.log(path);
	//=> /Users/sindresorhus/dev/current-path
});
```


## CLI

```sh
$ npm install --global current-path
```

```sh
$ current-path --help

Example
  $ current-path
  /Users/sindresorhus/dev/current-path
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
