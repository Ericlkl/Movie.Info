const request = require('supertest');
const app = require('../app');

describe('Search API', () => {
  test('Should able to search movie by movie name', async () => {
    await request(app)
      .get('/api/search/movie/')
      .query({
        name: 'inception'
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
