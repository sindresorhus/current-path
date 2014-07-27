'use strict';
var path = require('path');
var execFile = require('child_process').execFile;

function osx(cb) {
	var script = 'tell app "Finder"\ntry\nPOSIX path of (insertion location as alias)\non error\nPOSIX path of (path to desktop folder as alias)\nend try\nend tell';

	execFile('osascript', ['-e', script], function (err, stdout) {
		if (err) {
			return cb(err);
		}

		cb(null, stdout.trim());
	});
}

function win(cb) {
	var bin = path.join(__dirname, 'vendor', 'cdwhere', 'cdwhere.exe');

	execFile(bin, function (err, stdout) {
		if (err) {
			return cb(err);
		}

		cb(null, stdout.trim());
	});
}

function linux(cb) {
	cb(new Error('Linux not supported'));
}

module.exports = function (cb) {
	if (typeof cb !== 'function') {
		throw new Error('`callback` required');
	}

	if (process.platform === 'darwin') {
		return osx(cb);
	}

	if (process.platform === 'win32') {
		return win(cb);
	}

	linux(cb);
};
