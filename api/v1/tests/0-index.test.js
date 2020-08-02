const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../app');

chai.use(chaiHttp);

describe('APPLICATION REQUESTS', () => {
    it('Invalid Urls should return 404', (done) => {
        chai.request(server)
            .get('/')
            .end((err, result) => {
                result.should.have.status(404);
                done(err);
            });
    });

    it('Incomplete Urls should return 404', (done) => {
        chai.request(server)
            .get('/api/v1')
            .end((err, result) => {
                result.should.have.status(404);
                done(err);
            });
    });
});

/** Tests for the CRUD methods */
