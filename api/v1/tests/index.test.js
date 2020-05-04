const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../app');
const Tip = require('../models/tipsModel');
const Alert = require('../models/alertModel');
const { expect } = require('chai');
const Hospital = require('../models/hospModel');

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
    it('Index route should respond with 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
/** Test for the CRUD methods */
describe('Tips', () => {
    beforeEach((done) => {
        Tip.remove({}, (err) => {
            done(err);
        });
    });
});
describe('/POST Tip', () => {
    it('It should POST a tip', (done) => {
        const values = {
            title: 'Test title',
            detail: 'Test detail',
            thumbnail: 'Test thumbnail',
        };
        chai.request(server)
            .post('/api/v1/tip')
            .send(values)
            .end((err, result) => {
                result.should.have.status(201);
                result.body.should.be
                    .a('object')
                    .and.have.a.property('data')
                    .which.should.be.a('object');
                done(err);
            });
    });
});
describe('/GET Tip', () => {
    it('It should GET tips', (done) => {
        chai.request(server)
            .get('/api/v1/tips')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});

// Alerts
describe('Alerts', () => {
    beforeEach((done) => {
        Alert.remove({}, (err) => {
            done(err);
        });
    });
});
describe('/GET alerts', () => {
    it('It should GET alerts', (done) => {
        chai.request(server)
            .get('/api/v1/alerts')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
describe('/POST alert', () => {
    it('It should POST alert', (done) => {
        let values = {
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
});

// Hospitals tests
describe('Hospitals', () => {
    beforeEach((done) => {
        Hospital.remove({}, (err) => {
            done(err);
        });
    });
});
describe('/GET Hospitals', () => {
    it('It should GET hospitals', (done) => {
        chai.request(server)
            .get('/api/v1/hospitals')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
describe('/POST hospital', () => {
    it('It should POST hospital', (done) => {
        let values = {
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
                done();
            });
    });
});
