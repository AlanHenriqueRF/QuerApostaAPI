import supertest from 'supertest';
import { cleanDb } from '../helpers';
import { createGameFinished, createGames } from '../factories/games.factory';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('POST /games', () => {
  it('should respond with status 400 when post a game with a specific erro on schema', async () => {
    const response = await server.post('/games').send({
      homeTeamName: 'Flafla',
      awayTeamName: 900,
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 201 when post a participant ', async () => {
    const response = await server.post('/games').send({
      homeTeamName: 'Flafla',
      awayTeamName: 'fluflu',
    });

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      homeTeamName: expect.any(String),
      awayTeamName: expect.any(String),
      homeTeamScore: 0,
      awayTeamScore: 0,
      isFinished: false,
    });
  });
});

describe('POST /games/:id/finish', () => {
  it('should respond with status 404 when post no have a game cause he can not search the id', async () => {
    const response = await server.post('/games/1/finish').send({
      homeTeamScore: 2,
      awayTeamScore: 0,
    });

    expect(response.status).toEqual(404);
  });

  it('should respond with status 400 when post a game with a specific erro on schema', async () => {
    await createGames();
    const response = await server.post('/games/1/finish').send({
      homeTeamScore: 2,
      awayTeamScore: 'fla',
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 400 when post a game with isfineshd already true', async () => {
    const game = await createGameFinished();

    const response = await server.post(`/games/${game.id}/finish`).send({
      homeTeamScore: 2,
      awayTeamScore: 0,
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 201 when all is right', async () => {
    const game = await createGames();
    const response = await server.post(`/games/${game.id}/finish`).send({
      homeTeamScore: 2,
      awayTeamScore: 0,
    });

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      homeTeamName: expect.any(String),
      awayTeamName: expect.any(String),
      homeTeamScore: 2,
      awayTeamScore: 0,
      isFinished: true,
    });
  });
});

describe('GET /games', () => {
  it('should respond with status 200 when get all games ', async () => {
    await createGames();
    const response = await server.get('/games');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        homeTeamName: expect.any(String),
        awayTeamName: expect.any(String),
        homeTeamScore: expect.any(Number),
        awayTeamScore: expect.any(Number),
        isFinished: expect.any(Boolean),
      },
    ]);
  });
});

describe('GET /games/:id', () => {
  it('should respond with status 404 when get a id that not exist in games ', async () => {
    const response = await server.get('/games/1');
    expect(response.status).toEqual(404);
  });

  /* it('should respond with status 200 when get a game with id', async () => {
        await createGames();
        const response = await server.get('/games');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(
            {
                id: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                homeTeamName: expect.any(String),
                awayTeamName: expect.any(String),
                homeTeamScore: expect.any(Number),
                awayTeamScore: expect.any(Number),
                isFinished: expect.any(Boolean),
            },
        );
    }); */
});
