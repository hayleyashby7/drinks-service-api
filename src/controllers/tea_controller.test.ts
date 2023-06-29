import request from 'supertest';
import { app } from '../app';

describe('Tea Controller', () => {
	test('GET /tea should return correct object', async () => {
		const res = await request(app).get('/tea');

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Tea',
			name: 'Earl Grey',
			temperature: 'Hot',
		});
	});

	test('GET /tea should return correct object when no query provided', async () => {
		const res = await request(app).get('/tea');

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Tea',
			name: 'Earl Grey',
			temperature: 'Hot',
		});
	});

	test('GET /tea should return correct object when specific teaname query provided', async () => {
		const res = await request(app).get('/tea').query({ teaName: 'Green Tea' });

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Tea',
			name: 'Green Tea',
			temperature: 'Hot',
		});
	});

	test('GET /tea should return correct object when specific temperature query provided', async () => {
		const res = await request(app).get('/tea').query({ temperature: 'Cold' });

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Tea',
			name: 'Earl Grey',
			temperature: 'Cold',
		});
	});

	test('GET /tea should return correct object when specific teaname and temperature query provided', async () => {
		const res = await request(app).get('/tea').query({ teaName: 'Hibiscus', temperature: 'Iced' });

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			drinkType: 'Tea',
			name: 'Hibiscus',
			temperature: 'Iced',
		});
	});
});
