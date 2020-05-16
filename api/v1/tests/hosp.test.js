const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../app');
const Hospital = require('../models/hospModel');

chai.use(chaiHttp);

// Hospitals tests
describe('Hospitals', () => {
    beforeEach((done) => {
        Hospital.remove({}, (err) => {
            done(err);
        });
    });
});
describe('Hospital Endpoints', () => {
    it('It should POST hospital', (done) => {
        const values = {
            title: 'Test title',
            lat: 60,
            lon: 60,
            description: 'test description',
            open: true,
        };
        chai.request(server)
            .post('/api/v1/hospital')
            .send(values)
            .end((err, result) => {
                result.should.have.status(200);
                result.body.should.be.a('object');
                done(err);
            });
    });

    it('It should GET hospitals', (done) => {
        chai.request(server)
            .get('/api/v1/hospitals')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
