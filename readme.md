# current-path [![Build Status](https://travis-ci.org/sindresorhus/current-path.svg?branch=master)](https://travis-ci.org/sindresorhus/current-path)

> Get the path of the current directory in Finder *(OS X)* and Explorer *(Windows)*


## Usage

```
$ npm install --save current-path
```

```js
const currentPath = require('current-path');

currentPath((err, path) => {
	console.log(path);
	//=> '/Users/sindresorhus/dev/current-path'
});
```


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

MIT © [Sindre Sorhus](http://sindresorhus.com)
