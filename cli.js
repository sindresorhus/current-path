#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var currentPath = require('./');
var argv = process.argv.slice(2);

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Example',
		'    $ current-path',
		'    /Users/sindresorhus/dev/current-path'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

currentPath(function (err, path) {
	if (err) {
		throw err;
	}

	console.log(path);
});
