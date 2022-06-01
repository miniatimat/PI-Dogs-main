/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, Temperament, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  minHeight: 1,
  maxHeight: 2,
  minWeight:1,
  maxWeight: 2,
  shortLifespan: 1,
  longLifespan: 2,
  image: ""
};

describe('Dog routes', () => {
  beforeEach(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
  beforeEach(() => Dog.sync({force: true})
      .then(() => Dog.create(dog)));


  describe('GET /dogs', () => {

    it('should get 200', () =>
        agent.get('/dogs').expect(200))
  });

  describe('GET /dogs/:breed', (done) => {
    it('should get 200', () => {
      agent.get('/dogs/pug').expect(100)
    })

    it('should equal Pug', () => {
      agent.get('/dogs/pug').then((res)=>expect(res.body === dog))
    })

    it('should get 404', () => {
      agent.get('/dogs/doggo').then((res)=>expect(404))
    })
  })
})

describe('Temperament routes', () => {
  beforeEach(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
  beforeEach(() => Temperament.sync({force: true})
      .then(() => Temperament.create(dog)));

  describe('GET /temperaments', () => {
    it('should get 200', () =>
        agent.get('/temperaments').expect(200)
    );
  });
})