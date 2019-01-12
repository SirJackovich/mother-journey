//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let Blog = require('../server/blog/blog.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

chai.should();
chai.use(chaiHttp);

describe('Blog', () => {
  beforeEach((done) => { //Before each test we empty the database
    Blog.remove({}, () => {
      done();
    });
  });

  it('it should GET all the blogs', (done) => {
    chai.request(server)
      .get('/api/blog')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });

});
