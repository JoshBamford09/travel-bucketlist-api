const { expect } = require('chai');
const request = require('supertest');
const { User } = require('../models');
const app = require('../app');

describe('/users', () => {
    before(async () => await User.sequelize.sync());

    beforeEach(async () => {
        await User.destroy({ where: {} });
    });

    describe('with no records in the database', () => {
        describe('POST /users', () => {
          it('creates a new user in the database', async () => {
            const response = await request(app).post('/users').send({
              username: 'JamieCatto',
              email: 'jamietcatto@gmail.com',
            });
            
            expect(response.status).to.equal(201);
          });
        });
      });
});