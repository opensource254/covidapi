const chai = require('chai');
const chaiHttp = require('chai-http');
require('chai/register-should');
const server = require('../../../app');
const Tip = require('../models/tipsModel');

chai.use(chaiHttp);

describe('Tips', () => {
    beforeEach((done) => {
        Tip.remove({}, (err) => {
            done(err);
        });
    });
});
describe('Tip Endpoints', () => {
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

    it('It should GET tips', (done) => {
        chai.request(server)
            .get('/api/v1/tips')
            .end((err, result) => {
                result.should.have.status(200);
                done(err);
            });
    });
});
