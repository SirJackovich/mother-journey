//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const Blog = require('../server/blog/blog.model');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const User = require('../server/user/user.model');
const bcrypt = require('bcryptjs');
const expect = chai.expect;


let token = 'Bearer ';
const blog = {
  alt: "photo description",
  content: "content",
  credit: "credit",
  older: "orangutan",
  path: "title",
  photo: "08d9cadcb6e7d8516e82894a7e9aa14a.jpg",
  quote: "quote",
  title: "title"
};

chai.should();
chai.use(chaiHttp);

describe('Blog', () => {
  before((done) => {
    //Before the tests we empty the database
    Blog.remove({}, () => {
      User.remove({}, () => {
        // create a user
        const userParam = {
          "username": "test",
          "password": "testing"
        };
        const user = new User(userParam);

        // hash password
        if (userParam.password) {
          user.hash = bcrypt.hashSync(userParam.password, 10);
        }

        // save user
        user.save(() => {
          // auth user
          chai.request(server)
            .post('/api/auth')
            .send({
              "username": "test",
              "password": "testing"
            })
            .end((err, res) => {
              res.should.have.status(200);
              token = token + res.body.token;
              done();
            });
        });
      });
    });
  });

  it('it should create a blog', (done) => {
    chai.request(server)
      .post('/api/blog')
      .set("Authorization", token)
      .send(blog)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should get all the blogs', (done) => {
    chai.request(server)
      .get('/api/blog')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(1);
        expect(res.body[0]).to.contain(blog);
        done();
      });
  });

  it('it should delete a blog', (done) => {
    chai.request(server)
      .delete('/api/blog/title')
      .set("Authorization", token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
