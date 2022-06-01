const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('Inputs', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if minHeight is null', (done) => {
        Dog.create({name: "pug"})
            .then(() => done(new Error('It requires a minimum height')))
            .catch(() => done());
      });

      it('should throw an error if maxHeight is null', (done) => {
        Dog.create({name: "pug", minHeight: 1})
            .then(() => done(new Error('It requires a maximum height')))
            .catch(() => done());
      });

      it('should throw an error if minWeight is null', (done) => {
        Dog.create({name: "pug", minHeight: 1, maxHeight: 2})
            .then(() => done(new Error('It requires a minimum weight')))
            .catch(() => done());
      });

      it('should throw an error if maxWeight is null', (done) => {
        Dog.create({name: "pug", minHeight: 1, maxHeight: 2, minWeight: 1})
            .then(() => done(new Error('It requires a maximum weight')))
            .catch(() => done());
      });

      it('should throw an error if shortLifespan is null', (done) => {
        Dog.create({name: "pug", minHeight: 1, maxHeight: 2, minWeight: 1, maxWeight: 2})
            .then(() => done(new Error('It requires a minimum lifespan')))
            .catch(() => done());
      });

      it('should throw an error if longLifespan is null', (done) => {
        Dog.create({name: "pug", minHeight: 1, maxHeight: 2, minWeight: 1, maxWeight: 2, shortLifespan: 1})
            .then(() => done(new Error('It requires a maximum lifespan')))
            .catch(() => done());
      });

      it('should not throw an error if image is null', (done) => {
        Dog.create({name: "pug", minHeight: 1, maxHeight: 2, minWeight: 1, maxWeight: 2, shortLifespan: 1, longLifespan: 2})
            .then(() => done())
            .catch(() => done(new Error('It requires Temperaments')))
      });

      it('should work when all inputs are valid', () => {
        Dog.create({ name: 'Pug', minHeight: 1, maxHeight: 2, minWeight:1, maxWeight: 2, shortLifespan: 1, longLifespan: 2, image: ""});
      });
    });
  });
});
