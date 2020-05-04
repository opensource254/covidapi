const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../app');
const Alert = require('../models/alertModel');

chai.use(chaiHttp);

// Alerts
describe('Alerts', () => {
    beforeEach((done) => {
        Alert.remove({}, (err) => {
            done(err);
        });
    });
});
describe('Alert Endpoints', () => {
    it('It should POST alert', (done) => {
        const values = {
            title: 'Test title',
            detail: 'Test detail',
        };
        chai.request(server)
            .post('/api/v1/alert')
            .send(values)
            .end((err, result) => {
                result.should.have.status(201);
                result.body.should.be.a('object');
                done();
            });
    });
    it('It should GET alerts', (done) => {
        chai.request(server)
            .get('/api/v1/alerts')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
