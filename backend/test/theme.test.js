import request from 'supertest';
import app from '../app.js';
import {expect} from 'chai';
import { sequelize } from '../models/index.js';

describe('Theme APIs', function () {
    this.timeout(10000);
  
    after(async () => {
      await sequelize.close();
    });


  it('GET /themes should return 4 themes', async () => {
    const response = await request(app).get('/api/themes');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.have.lengthOf(4);

  });
});