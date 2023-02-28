const { expect } = require('chai');
const request = require('supertest');
const { Destination } = require('../models');
const app = require('../app');

describe('/destinations', () => {
    before(async () => await Destination.sequelize.sync());

    beforeEach(async () => {
        await Destination.destroy({ where: {} });
    });

    describe('with no records in the database', () => {
        describe('POST /destinations', () => {
          it('creates a new destination in the database', async () => {
            const response = await request(app).post('/destinations').send({
              name: 'Bali',
              description: 'An island off Indonesia.',
              country: 'Indonensia'
            });
            
            expect(response.status).to.equal(201);
            expect(response.body.name).to.equal('Bali');
            expect(response.body.description).to.equal('An island off Indonesia.');
            expect(response.body.country).to.equal('Indonensia');
          });
        });
      });

    describe('with records in the database', () => {
      let destinations;

      beforeEach(async () => {
        destinations = await Promise.all([
          Destination.create({ 
            name: "Bali", 
            description: "An island off Indonesia.",
            country: "Indonesia" }),
          Destination.create({ 
            name: "Manchester", 
            description: "A city in the North of England",
            country: "England" }),
          Destination.create({ 
            name: "Marbella", 
            description: "A beach town in the South of Spain.",
            country: "Spain" }),
        ]);
      });

      describe('GET /destinations', () => {
        it('gets all destinations in the database', async () => {
          const response = await request(app).get('/destinations');
          
          expect(response.status).to.equal(200);
          expect(response.body.length).to.equal(3);
          response.body.forEach((destination) => {
            const expected = destinations.find((a) => a.id === destination.id);

            expect(destination.name).to.equal(expected.name);
            expect(destination.description).to.equal(expected.description);
            expect(destination.country).to.equal(expected.country);
          });
        });
      });

      describe('GET /destinations/:id', () => {
        it('gets a destination by its id', async () => {
          const destination = destinations[0];
          const response = await request(app).get(`/destinations/${destination.id}`);

          expect(response.status).to.equal(200);
          expect(response.body.name).to.equal(destination.name);
          expect(response.body.description).to.equal(destination.description);
          expect(response.body.country).to.equal(destination.country);
        });

        it('returns a 404 if their is no destination with that id', async () => {
          const response = await request(app).get('/destinations/9999999');

          expect(response.status).to.equal(404);
          expect(response.body.message).to.equal('destination 9999999 does not exist.');
        });
      });

      describe('PATCH /destinations/:id', () => {
        it('updates a destination\'s record by their id', async () => {
          const destination = destinations[0];
          const response = await request(app).patch(`/destinations/${destination.id}`).send({
            name: "Pho Kang"
          });

          expect(response.status).to.equal(200);
          expect(response.body.id).to.equal(destination.id);
          expect(response.body.description).to.equal(destination.description);
          expect(response.body.country).to.equal(destination.country);
          expect(response.body.name).to.equal('Pho Kang');
        });

        it('returns a 404 if there is no destination with that id', async () => {
          const response = await request(app).patch('/destinations/9999999').send({
            name: "Pho Kang"
          });

          expect(response.status).to.equal(404);
          expect(response.body.message).to.equal('destination 9999999 does not exist.');
        });
      });

      describe('DELETE /destinations/:id', () => {
        it('deletes a destination by id', async () => {
          const destination = destinations[0];
          const response = await request(app).delete(`/destinations/${destination.id}`);

          const deletedDest = await Destination.findByPk(destination.id, { raw: true });
          expect(response.status).to.equal(204);
          expect(deletedDest).to.equal(null);
        });

        it('returns a 404 if there is no destination with that id', async () => {
          const response = await request(app).delete('/destinations/9999999');

          expect(response.status).to.equal(404);
          expect(response.body.message).to.equal('destination 9999999 does not exist.');
        });
      });
    });
});