const request = require('supertest')
const app = require('./app.js')

describe('POST /encode', () => {

	describe('String exists', () => {
		test('should response with 401 if there is no authorization headers set', (done) => {

			request(app)
      .post('/encode')
      .send({
        string: "AAABCC"
      })
      .expect(401)

			.end(function(err, res) {
				if (err) return done(err);

				done();
			})

		})


		test('should response with 200 if there is authorization headers set', (done) => {

			request(app)
      .post('/encode')
			.set('authorization', 'xyz0987654321')
      .send({
        string: "AAABCC"
      })
      .expect(200)

			.end(function(err, res) {
				if (err) return done(err);

				done();
			})

		})
		
	})

})