const server = require('../src/server/index.js');
const expect = require('chai').expect;
const request = require('supertest')('http://localhost:3000');

describe('Server tests', () => {
	const VERSION_RESPONSE = "Version:1"
	const NAME_1 = "lola"
	it('should get'+ VERSION_RESPONSE, (done) => {
		request.
		get('/').
		expect(200, VERSION_RESPONSE, done)
	})

	it('should get list of names', (done) =>{
		request.
		get('/names').
		expect(200).
		end((err, response) =>{
			if (err) {
				throw err
			}
			expect(response.body).to.be.instanceof(Array)
			expect(response.body[0]).to.be.an('string')
			done()	
		})

	})

	it('should add a name', (done) => {
		request.
		post('/names').
		send({name: NAME_1}).
		expect(201).
		end((err, response) => {
			if (err) {
				throw err
			}
			expect(response.header).to.have.property('location','/names/'+ NAME_1)
			done()
		})
		
	})

	it('should give error for trying to add same resource more then once', (done) => {
		request.
		post('/names').
		send({name: NAME_1}).
		expect(409,'',done)
	})

//end of tests
})