const server = require('../src/server/index.js');
const expect = require('chai').expect;
const request = require('supertest')('http://localhost:3000');

describe('Server tests', () => {
const VERSION_RESPONSE = "Version:1"
  it('should get'+ VERSION_RESPONSE, (done) => {
    request.
    get('/').
    expect(200, VERSION_RESPONSE, done);
  })

//end of tests
})