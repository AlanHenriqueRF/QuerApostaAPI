import supertest from 'supertest';
import { cleanDb } from '../helpers';
import { createGameFinished, createGames } from '../factories/games.factory';
import { createParticipant } from '../factories/participant.factory';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('POST /bets', () => {
  it('should respond with status 400 when post a bet with a specific erro on schema', async () => {
    const participant = await createParticipant();
    const game = await createGames();
    const response = await server.post('/bets').send({
      homeTeamScore: 2,
      awayTeamScore: 1,
      amountBet: 'mil',
      gameId: game.id,
      participantId: participant.id,
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 404 when post a bet with no game', async () => {
    const participant = await createParticipant();
    const response = await server.post('/bets').send({
      homeTeamScore: 2,
      awayTeamScore: 1,
      amountBet: 1000,
      gameId: 1,
      participantId: participant.id,
    });

    expect(response.status).toEqual(404);
  });

  it('should respond with status 400 when post a bet with game already fineshed', async () => {
    const participant = await createParticipant();
    const game = await createGameFinished();
    const response = await server.post('/bets').send({
      homeTeamScore: 2,
      awayTeamScore: 1,
      amountBet: 1000,
      gameId: game.id,
      participantId: participant.id,
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 404 when post a bet with no participant', async () => {
    const game = await createGames();
    const response = await server.post('/bets').send({
      homeTeamScore: 2,
      awayTeamScore: 1,
      amountBet: 1000,
      gameId: game.id,
      participantId: 1,
    });

    expect(response.status).toEqual(404);
  });

  it('should respond with status 400 when post a bet with participant balance less then amount Bet', async () => {
    const participant = await createParticipant();
    const game = await createGames();
    const response = await server.post('/bets').send({
      homeTeamScore: 2,
      awayTeamScore: 1,
      amountBet: 6000,
      gameId: game.id,
      participantId: participant.id,
    });

    expect(response.status).toEqual(400);
  });

  it('should respond with status 201 when post a bet ', async () => {
    const participant = await createParticipant();
    const game = await createGames();
    const response = await server.post('/bets').send({
      homeTeamScore: 2,
      awayTeamScore: 1,
      amountBet: 4000,
      gameId: game.id,
      participantId: participant.id,
    });

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({
      id: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      homeTeamScore: expect.any(Number),
      awayTeamScore: expect.any(Number),
      amountBet: expect.any(Number),
      gameId: expect.any(Number),
      participantId: expect.any(Number),
      status: expect.any(String),
      amountWon: null,
    });
  });
});
