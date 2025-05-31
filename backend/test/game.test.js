import request from 'supertest';
import app from '../app.js';
import {expect} from 'chai';
import { sequelize } from '../models/index.js';
import { setup } from './setup.js';

describe('Game APIs', function() {

    this.timeout(10000);
  
    before(async function() {
      await setup();
    });
  
  it('GET /game/start should return game object', async () => {
    const themes = await request(app).get('/api/themes');
    console.log('Themes:', themes.body[0]);
    const response = await request(app).post('/api/game/start').send({ themeId: themes.body[0].id });
    console.log('Response:', response.body);
    expect(response.status).to.equal(201);
    expect(response.body).to.be.an('object');
  });

  it('POST /game/move should return updated game object', async () => {
    const themes = await request(app).get('/api/themes');
    const startResponse = await request(app).post('/api/game/start').send({ themeId: themes.body[0].id });
    const gameId = startResponse.body.id;
    
    const response = await request(app).post('/api/game/move').send({ gameId, x: 0, y: 0 });
    console.log('Move Response:', response.body);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
  });

    it('GET /game/summary/:gameId should return game summary', async () => {
        const themes = await request(app).get('/api/themes');
        const startResponse = await request(app).post('/api/game/start').send({ themeId: themes.body[0].id });
        const gameId = startResponse.body.id;
        
        const response = await request(app).get(`/api/game/summary/${gameId}`);
        console.log('Summary Response:', response.body);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    });
});