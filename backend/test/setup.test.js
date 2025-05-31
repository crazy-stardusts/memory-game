import {expect } from 'chai';
import { setup } from './setup.js';
import { sequelize } from '../models/index.js';

describe('Sequqlize', function() {
  this.timeout(10000);


  it('sequelize should exist', () => {
    expect(sequelize).to.exist;
  })
});
