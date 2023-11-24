import supertest from 'supertest';
import { cleanDb } from '../helpers';
import { createParticipant } from '../factories/participant.factory';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('POST /participants', () => {
  it('should respond with status 400 when post a participant with balance less then R$10,00 in cents is 1000', async () => {
    const response = await server.post('/participants').send({
      name: 'alan',
      balance: 900,
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 201 when post a participant ', async () => {
    const response = await server.post('/participants').send({
      name: 'alan',
      balance: 1000,
    });

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      name: expect.any(String),
      balance: expect.any(Number),
    });
  });
});

describe('GET /participants', () => {
  it('should respond with status 200 when get all participant ', async () => {
    await createParticipant();
    const response = await server.get('/participants');
    console.log(response.body);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        name: expect.any(String),
        balance: expect.any(Number),
      },
    ]);
  });
});
