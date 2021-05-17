const { expect } = require('chai');
const request = require('supertest');
const { Reader } = require('../src/models');
const app = require('../src/app')

describe('/reader', () => {
    before(async () => Reader.sequelize.sync());

    beforeEach(async () => {
        await Reader.destroy({ where: {} });
    })
});