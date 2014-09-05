'use strict';
var assert = require('assert');
var currentPath = require('./');

it('should return the current file manager path', function (cb) {
	currentPath(function (err, path) {
		console.log('Current path:', path);
		assert(!err, err);
		assert(path && path.length > 0, path);
		cb();
	});
});
