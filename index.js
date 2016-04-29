'use strict';
const path = require('path');
const execa = require('execa');
const runApplescript = require('run-applescript');

module.exports = () => {
	if (process.platform === 'darwin') {
		return runApplescript('tell app "Finder"\ntry\nPOSIX path of (insertion location as alias)\non error\nPOSIX path of (path to desktop folder as alias)\nend try\nend tell');
	}

	if (process.platform === 'win32') {
		return execa(path.join(__dirname, 'vendor', 'cdwhere', 'cdwhere.exe'));
	}

	return Promise.reject(new Error('Linux not supported'));
};
