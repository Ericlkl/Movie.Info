const request = require('supertest');
const app = require('../app');

describe('NewsAPI', () => {
  test('Should return news which related to the keyword', async () => {
    request(app)
      .get('/api/news/')
      .query({
        keyword: 'Avenger'
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
