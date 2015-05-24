#!/usr/bin/env node
'use strict';
var meow = require('meow');
var currentPath = require('./');

meow({
	help: [
		'Example',
		'  $ current-path',
		'  /Users/sindresorhus/dev/current-path'
	].join('\n')
});

currentPath(function (err, path) {
	if (err) {
		throw err;
	}

	console.log(path);
});
