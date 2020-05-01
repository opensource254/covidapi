/* const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../app');

chai.use(chaiHttp);

describe('Users', () => {
    describe('GET /api/v1/users', () => {
        it('Users route should respond with 200', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, result) => {
                    result.should.have.status(200);
                    done(err);
                });
        });
    });
    describe('GET /api/v1/admin', () => {
        it('Admin route should respond with 200', (done) => {
            chai.request(server)
                .get('/admin')
                .end((err, result) => {
                    result.should.have.status(200);
                    done(err);
                });
        });
    });
    describe('GET /api/v1/doctors', () => {
        it('Admin route should respond with 200', (done) => {
            chai.request(server)
                .get('/doctors')
                .end((err, result) => {
                    result.should.have.status(200);
                    done(err);
                });
        });
    });
});
*/
