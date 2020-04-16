const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../index');

chai.use(chaiHttp);

describe('APPLICATION REQUESTS', () => {
    it('The welcome page SHOULD respond with 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });

    it('Api v1 should respond with 200', (done) => {
        chai.request(server)
            .get('/api/v1')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
    it('Admin route should respond with 200', (done) => {
        chai.request(server)
            .get('/admin')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
    it('Index route should respond with 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
    it('Users route should respond with 200', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
    it('Doctors route should respond with 200', (done) => {
        chai.request(server)
            .get('/doctors')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
