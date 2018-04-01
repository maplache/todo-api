
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [
  {
    text: 'First test'
  },
  {
    text: 'Second test'
  }
];

beforeEach( (done) => {
  Todo.remove({})
    .then( () => {
      return Todo.insertMany(todos, (error, docs) => {
       if(error){
           return done(error);
       }
     });
    })
    .then( () => done() );
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({
        text
      })
      .expect(200)
      .expect( (res) => {
        expect(res.body.text).toBe(text);
      })
      .end( (err, res) => {
        if(err){
          done(err);
          return;
        }

        Todo.find({text}).then( (todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch( (error) => done(error));
      });
  });

  it('should not create todo', (done) => {
    request(app)
      .post('/todos')
      .send( {} )
      .expect(400)
      .end( (err, res) => {
        if(err){
          done(err);
          return;
        }

        Todo.find().then( (todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch( (error) => done(error));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect( (res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  })
})
