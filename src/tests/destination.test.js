const { expect } = require('chai');
const request = require('supertest');
const { Destination } = require('../models');
const app = require('../app');

describe('/users', () => {
    before(async () => await Destination.sequelize.sync());

    beforeEach(async () => {
        await Destination.destroy({ where: {} });
    });

    describe('with no records in the database', () => {
        describe('POST /destinations', () => {
          it('creates a new destination in the database', async () => {
            const response = await request(app).post('/destinations').send({
              name: 'Bali',
              description: 'An island off the coast of Indonesia.',
            });
            
            expect(response.status).to.equal(201);
          });
        });
      });
});