const request = require('supertest');
const app = require('./app.js');

describe('POST /search', function () {
    it('should return json', function (done) {
        request(app)
            .post('/search')
            .send({query: 'salad'})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});