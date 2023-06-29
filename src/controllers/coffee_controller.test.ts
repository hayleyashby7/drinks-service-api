import request from 'supertest';
import { app } from '../app';

describe('Coffee Controller', () => {
	test('GET /coffee should return correct object', async () => {
		const res = await request(app).get('/coffee').query({ coffeeName: 'Latte' });

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Coffee',
			name: 'Latte',
		});
	});

	test('GET /coffee should return correct object when specific coffeename query provided', async () => {
		const res = await request(app).get('/coffee').query({ coffeeName: 'Pumpkin Spiced Latte' });

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Coffee',
			name: 'Pumpkin Spiced Latte',
		});
	});

	test('GET /coffee should return correct object when no coffeename query provided', async () => {
		const res = await request(app).get('/coffee');

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Coffee',
			name: 'Latte',
		});
	});

	test('GET /coffeelover should return correct message', async () => {
		const res = await request(app).get('/coffeelover');
		expect(res.statusCode).toEqual(200);
		expect(res.text).toEqual('I like coffee!');
	});
});
