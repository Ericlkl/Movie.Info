import request from 'supertest';
import app from '../app';

describe('MoviesAPI', () => {
  test('Should return movie information which related to the movieid provided', async () => {
    await request(app)
      .get('/api/movies/474350')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Should return a movie list by provided ranking type and language', async () => {
    await request(app)
      .get('/api/movies/')
      .query({
        lang: 'en',
        ranking_type: 'top_rated'
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
