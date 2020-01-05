import request from 'supertest';
import app from '../app';

describe('Server App', () => {
  test('Should return the website ', async () => {
    await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });
});
