'use strict';
var path = require('path');
var execFile = require('child_process').execFile;
var runApplescript = require('run-applescript');

function osx(cb) {
	var script = 'tell app "Finder"\ntry\nPOSIX path of (insertion location as alias)\non error\nPOSIX path of (path to desktop folder as alias)\nend try\nend tell';

	runApplescript(script, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
}

function win(cb) {
	var bin = path.join(__dirname, 'vendor', 'cdwhere', 'cdwhere.exe');

	execFile(bin, function (err, stdout) {
		if (err) {
			cb(err);
			return;
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
		osx(cb);
		return
	}

	if (process.platform === 'win32') {
		win(cb);
		return
	}

	linux(cb);
};
