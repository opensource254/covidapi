var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./index");
let should = chai.should();
chai.use(chaiHttp);

describe('APPLICATION REQUESTS', () => {
    it('The welcome page SHOULD respond with 200', (done) => {
        chai.request(server).get('/').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })
    })

    it('Api v1 should respond with 200', (done) => {
        chai.request(server).get('/api/v1').end((err, result) => {
            result.should.have.status(200)
            done(err)
        })
    })
})
