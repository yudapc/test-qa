var request = require('request');
var expect = require('Chai').expect;

describe('test qa', () => {
  describe('test case A', () => {
    it('should data length 2, and each data contains id fullname age and email', (done) => {
      request.get('http://localhost:9999', (err, res, body) => {
        const data = JSON.parse(body);
        expect(res.statusCode).to.equal(200);
        expect(data.length).to.equal(2);
        data.map((d) => {
          expect('id' in d).to.equal(true);
          expect('fullname' in d).to.equal(true);
          expect('age' in d).to.equal(true);
          expect('email' in d).to.equal(true);
        });
        done();
      });
    });
  });
  describe('test case B', () => {
    it('should data exist, and each data contains id fullname age and email. Age is 30', (done) => {
      request.get('http://localhost:9999/0', (err, res, body) => {
        const data = JSON.parse(body);
        expect(res.statusCode).to.equal(200);
        expect(data).not.to.equal(undefined);
        expect('id' in data).to.equal(true);
        expect('fullname' in data).to.equal(true);
        expect('age' in data).to.equal(true);
        expect('email' in data).to.equal(true);
        expect(data.age).to.equal(30);
        done();
      });
    });
  });
  describe('test case C', () => {
    it('should data exist, and each data contains id fullname age and email. Age is 20 and email is jane@doe.com', (done) => {
      request.get('http://localhost:9999/1', (err, res, body) => {
        const data = JSON.parse(body);
        expect(res.statusCode).to.equal(200);
        expect(data).not.to.equal(undefined);
        expect('id' in data).to.equal(true);
        expect('fullname' in data).to.equal(true);
        expect('age' in data).to.equal(true);
        expect('email' in data).to.equal(true);
        expect(data.age).to.equal(20);
        expect(data.email).to.equal('jane@doe.com');
        done();
      });
    });
  });
  describe('test case D', () => {
    it('should data same with payload', (done) => {
      const payload = {fullname: 'yuda', age: 28, email: 'yuda.pc@gmail.com'};
      request({
        url: 'http://localhost:9999/',
        method: 'POST',
        json: payload,
      }, (err, res, body) => {
        const data = body;
        expect('id' in data).to.equal(true);
        expect('fullname' in data).to.equal(true);
        expect('age' in data).to.equal(true);
        expect('email' in data).to.equal(true);
        expect(data.fullname).to.equal(payload.fullname);
        expect(data.age).to.equal(payload.age);
        expect(data.email).to.equal(payload.email);
        done();
      });
    });
  });
});
