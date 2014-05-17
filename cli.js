#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var currentPath = require('./index');

function help() {
	console.log([
		pkg.description,
		'',
		'Example',
		'  $ current-path',
		'  /Users/sindresorhus/dev/current-path'
	].join('\n'));
}

if (process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

currentPath(function (err, path) {
	if (err) {
		throw err;
	}

	console.log(path);
});
