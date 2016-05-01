'use strict';
const path = require('path');
const execa = require('execa');
const runApplescript = require('run-applescript');

module.exports = () => {
	if (process.platform === 'darwin') {
		return runApplescript(`
			tell app "Finder"
				try
					POSIX path of (insertion location as alias)
				on error
					POSIX path of (path to desktop folder as alias)
				end try
			end tell
		`);
	}

	if (process.platform === 'win32') {
		return execa(path.join(__dirname, 'vendor/cdwhere/cdwhere.exe'));
	}

	return Promise.reject(new Error('Linux is not supported'));
};
