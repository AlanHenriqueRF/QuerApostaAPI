import { ApplicationError } from '@/protocols';

export function alreadyFinishGameError(): ApplicationError {
    return {
        name: 'alreadyFinishGameError',
        message: `This game already finished you can not Bet it.`,
    };
}
