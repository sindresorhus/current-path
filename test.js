import test from 'ava';
import currentPath from './index.js';

test('main', async t => {
	t.truthy(await currentPath());
});
