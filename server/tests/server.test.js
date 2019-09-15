const request = require('supertest');
const app = require('../app');

describe('Server App', () => {
  test('Should return the website ', async () => {
    await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });
});
