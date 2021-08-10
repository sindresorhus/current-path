# current-path

> Get the path of the current directory in Finder *(macOS)* and Explorer *(Windows)*

## Usage

```
$ npm install current-path
```

```js
import currentPath from 'current-path';

console.log(await currentPath());
//=> '/Users/sindresorhus/dev/current-path'
```

## API

### currentPath()

Returns a `Promise<string>` with current directory in Finder or Explorer.

## Related

- [current-path-cli](https://github.com/sindresorhus/current-path-cli) - CLI for this module
