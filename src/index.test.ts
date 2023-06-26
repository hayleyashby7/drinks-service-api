import { test } from './index';

describe('test', () => {
	it('can run a test after importing from ts file', () => {
		expect(test).toBe(true);
	});
});
