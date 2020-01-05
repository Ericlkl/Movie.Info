import request from 'supertest';
import app from '../app';

describe('Tweets API', () => {
  test('Should return the tweets which related to the query keyword', async () => {
    await request(app)
      .get('/api/tweets/')
      .query({
        query: 'Spiderman'
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
